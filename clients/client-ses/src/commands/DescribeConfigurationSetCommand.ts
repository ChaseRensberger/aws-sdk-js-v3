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

import { DescribeConfigurationSetRequest, DescribeConfigurationSetResponse } from "../models/models_0";
import {
  deserializeAws_queryDescribeConfigurationSetCommand,
  serializeAws_queryDescribeConfigurationSetCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 *
 * The input for {@link DescribeConfigurationSetCommand}.
 */
export interface DescribeConfigurationSetCommandInput extends DescribeConfigurationSetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationSetCommand}.
 */
export interface DescribeConfigurationSetCommandOutput extends DescribeConfigurationSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details of the specified configuration set. For information about using
 *             configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DescribeConfigurationSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DescribeConfigurationSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   ConfigurationSetAttributeNames: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeConfigurationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeConfigurationSetCommandInput - {@link DescribeConfigurationSetCommandInput}
 * @returns {@link DescribeConfigurationSetCommandOutput}
 * @see {@link DescribeConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 *
 */
export class DescribeConfigurationSetCommand extends $Command<
  DescribeConfigurationSetCommandInput,
  DescribeConfigurationSetCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: DescribeConfigurationSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigurationSetCommandInput, DescribeConfigurationSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DescribeConfigurationSetCommand";
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
  private serialize(input: DescribeConfigurationSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeConfigurationSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConfigurationSetCommandOutput> {
    return deserializeAws_queryDescribeConfigurationSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
