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

import { CreateHsmConfigurationMessage, CreateHsmConfigurationResult } from "../models/models_0";
import {
  deserializeAws_queryCreateHsmConfigurationCommand,
  serializeAws_queryCreateHsmConfigurationCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 *
 * The input for {@link CreateHsmConfigurationCommand}.
 */
export interface CreateHsmConfigurationCommandInput extends CreateHsmConfigurationMessage {}
/**
 * @public
 *
 * The output of {@link CreateHsmConfigurationCommand}.
 */
export interface CreateHsmConfigurationCommandOutput extends CreateHsmConfigurationResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an HSM configuration that contains the information required by an Amazon Redshift
 *             cluster to store and use database encryption keys in a Hardware Security Module (HSM).
 *             After creating the HSM configuration, you can specify it as a parameter when creating a
 *             cluster. The cluster will then store its encryption keys in the HSM.</p>
 *          <p>In addition to creating an HSM configuration, you must also create an HSM client
 *             certificate. For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-HSM.html">Hardware Security Modules</a>
 *             in the Amazon Redshift Cluster Management Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateHsmConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateHsmConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = {
 *   HsmConfigurationIdentifier: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   HsmIpAddress: "STRING_VALUE", // required
 *   HsmPartitionName: "STRING_VALUE", // required
 *   HsmPartitionPassword: "STRING_VALUE", // required
 *   HsmServerPublicCertificate: "STRING_VALUE", // required
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateHsmConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateHsmConfigurationCommandInput - {@link CreateHsmConfigurationCommandInput}
 * @returns {@link CreateHsmConfigurationCommandOutput}
 * @see {@link CreateHsmConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateHsmConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link HsmConfigurationAlreadyExistsFault} (client fault)
 *  <p>There is already an existing Amazon Redshift HSM configuration with the specified
 *             identifier.</p>
 *
 * @throws {@link HsmConfigurationQuotaExceededFault} (client fault)
 *  <p>The quota for HSM configurations has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 *
 */
export class CreateHsmConfigurationCommand extends $Command<
  CreateHsmConfigurationCommandInput,
  CreateHsmConfigurationCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: CreateHsmConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHsmConfigurationCommandInput, CreateHsmConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateHsmConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateHsmConfigurationCommand";
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
  private serialize(input: CreateHsmConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateHsmConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHsmConfigurationCommandOutput> {
    return deserializeAws_queryCreateHsmConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
