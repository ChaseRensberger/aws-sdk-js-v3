// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { RebootCacheClusterMessage, RebootCacheClusterResult } from "../models/models_0";
import {
  deserializeAws_queryRebootCacheClusterCommand,
  serializeAws_queryRebootCacheClusterCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link RebootCacheClusterCommand}.
 */
export interface RebootCacheClusterCommandInput extends RebootCacheClusterMessage {}
/**
 * @public
 *
 * The output of {@link RebootCacheClusterCommand}.
 */
export interface RebootCacheClusterCommandOutput extends RebootCacheClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Reboots some, or all, of the cache nodes
 *             within a provisioned cluster. This operation applies any modified cache parameter
 *             groups to the cluster. The reboot operation takes place as soon as possible, and
 *             results in a momentary outage to the cluster. During the reboot, the cluster
 *             status is set to REBOOTING.</p>
 *          <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p>
 *          <p>When the reboot is complete, a cluster event is created.</p>
 *          <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters.
 *             Rebooting is not supported on Redis (cluster mode enabled) clusters.</p>
 *          <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied,
 *             see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes.rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RebootCacheClusterCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RebootCacheClusterCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = {
 *   CacheClusterId: "STRING_VALUE", // required
 *   CacheNodeIdsToReboot: [ // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RebootCacheClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RebootCacheClusterCommandInput - {@link RebootCacheClusterCommandInput}
 * @returns {@link RebootCacheClusterCommandOutput}
 * @see {@link RebootCacheClusterCommandInput} for command's `input` shape.
 * @see {@link RebootCacheClusterCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link CacheClusterNotFoundFault} (client fault)
 *  <p>The requested cluster ID does not refer to an existing cluster.</p>
 *
 * @throws {@link InvalidCacheClusterStateFault} (client fault)
 *  <p>The requested cluster is not in the <code>available</code> state.</p>
 *
 *
 * @example RebootCacheCluster
 * ```javascript
 * // Reboots the specified nodes in the names cluster.
 * const input = {
 *   "CacheClusterId": "custom-mem1-4  ",
 *   "CacheNodeIdsToReboot": [
 *     "0001",
 *     "0002"
 *   ]
 * };
 * const command = new RebootCacheClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheCluster": {
 *     "AutoMinorVersionUpgrade": true,
 *     "CacheClusterCreateTime": "2016-12-21T21:59:43.794Z",
 *     "CacheClusterId": "my-mem-cluster",
 *     "CacheClusterStatus": "rebooting cache cluster nodes",
 *     "CacheNodeType": "cache.t2.medium",
 *     "CacheParameterGroup": {
 *       "CacheNodeIdsToReboot": [],
 *       "CacheParameterGroupName": "default.memcached1.4",
 *       "ParameterApplyStatus": "in-sync"
 *     },
 *     "CacheSecurityGroups": [],
 *     "CacheSubnetGroupName": "default",
 *     "ClientDownloadLandingPage": "https://console.aws.amazon.com/elasticache/home#client-download:",
 *     "ConfigurationEndpoint": {
 *       "Address": "my-mem-cluster.abcdef.cfg.use1.cache.amazonaws.com",
 *       "Port": 11211
 *     },
 *     "Engine": "memcached",
 *     "EngineVersion": "1.4.24",
 *     "NumCacheNodes": 2,
 *     "PendingModifiedValues": {},
 *     "PreferredAvailabilityZone": "Multiple",
 *     "PreferredMaintenanceWindow": "wed:06:00-wed:07:00"
 *   }
 * }
 * *\/
 * // example id: rebootcachecluster-1482969019505
 * ```
 *
 */
export class RebootCacheClusterCommand extends $Command<
  RebootCacheClusterCommandInput,
  RebootCacheClusterCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: RebootCacheClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RebootCacheClusterCommandInput, RebootCacheClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RebootCacheClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "RebootCacheClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: RebootCacheClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRebootCacheClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebootCacheClusterCommandOutput> {
    return deserializeAws_queryRebootCacheClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
