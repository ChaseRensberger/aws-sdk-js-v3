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

import { CreateHttpNamespaceRequest, CreateHttpNamespaceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateHttpNamespaceCommand,
  serializeAws_json1_1CreateHttpNamespaceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 *
 * The input for {@link CreateHttpNamespaceCommand}.
 */
export interface CreateHttpNamespaceCommandInput extends CreateHttpNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateHttpNamespaceCommand}.
 */
export interface CreateHttpNamespaceCommandOutput extends CreateHttpNamespaceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be
 *    discovered using a <code>DiscoverInstances</code> request but can't be discovered using
 *    DNS.</p>
 *          <p>For the current quota on the number of namespaces that you can create using the same Amazon Web Services account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">Cloud Map quotas</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreateHttpNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreateHttpNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = {
 *   Name: "STRING_VALUE", // required
 *   CreatorRequestId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateHttpNamespaceCommandInput - {@link CreateHttpNamespaceCommandInput}
 * @returns {@link CreateHttpNamespaceCommandOutput}
 * @see {@link CreateHttpNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateHttpNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link DuplicateRequest} (client fault)
 *  <p>The operation is already in progress.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link NamespaceAlreadyExists} (client fault)
 *  <p>The namespace that you're trying to create already exists.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p>The resource can't be created because you've reached the quota on the number of
 *    resources.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The list of tags on the resource is over the quota. The maximum number of tags that can be
 *    applied to a resource is 50.</p>
 *
 *
 * @example CreateHttpNamespace example
 * ```javascript
 * // This example creates an HTTP namespace.
 * const input = {
 *   "CreatorRequestId": "example-creator-request-id-0001",
 *   "Description": "Example.com AWS Cloud Map HTTP Namespace",
 *   "Name": "example-http.com"
 * };
 * const command = new CreateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OperationId": "httpvoqozuhfet5kzxoxg-a-response-example"
 * }
 * *\/
 * // example id: createhttpnamespace-example-1590114811304
 * ```
 *
 */
export class CreateHttpNamespaceCommand extends $Command<
  CreateHttpNamespaceCommandInput,
  CreateHttpNamespaceCommandOutput,
  ServiceDiscoveryClientResolvedConfig
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
  constructor(readonly input: CreateHttpNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHttpNamespaceCommandInput, CreateHttpNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateHttpNamespaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "CreateHttpNamespaceCommand";
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
  private serialize(input: CreateHttpNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHttpNamespaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHttpNamespaceCommandOutput> {
    return deserializeAws_json1_1CreateHttpNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
