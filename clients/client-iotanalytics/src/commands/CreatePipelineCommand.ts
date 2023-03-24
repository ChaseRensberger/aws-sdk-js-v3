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

import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { CreatePipelineRequest, CreatePipelineResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreatePipelineCommand,
  serializeAws_restJson1CreatePipelineCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandInput extends CreatePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandOutput extends CreatePipelineResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a pipeline. A pipeline consumes messages from a channel and allows you to process
 *       the messages before storing them in a data store. You must specify both a <code>channel</code>
 *       and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in
 *       the <code>pipelineActivities</code> array.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CreatePipelineCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CreatePipelineCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = {
 *   pipelineName: "STRING_VALUE", // required
 *   pipelineActivities: [ // required
 *     {
 *       channel: {
 *         name: "STRING_VALUE", // required
 *         channelName: "STRING_VALUE", // required
 *         next: "STRING_VALUE",
 *       },
 *       lambda: {
 *         name: "STRING_VALUE", // required
 *         lambdaName: "STRING_VALUE", // required
 *         batchSize: Number("int"), // required
 *         next: "STRING_VALUE",
 *       },
 *       datastore: {
 *         name: "STRING_VALUE", // required
 *         datastoreName: "STRING_VALUE", // required
 *       },
 *       addAttributes: {
 *         name: "STRING_VALUE", // required
 *         attributes: { // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *         next: "STRING_VALUE",
 *       },
 *       removeAttributes: {
 *         name: "STRING_VALUE", // required
 *         attributes: [ // required
 *           "STRING_VALUE",
 *         ],
 *         next: "STRING_VALUE",
 *       },
 *       selectAttributes: {
 *         name: "STRING_VALUE", // required
 *         attributes: [ // required
 *           "STRING_VALUE",
 *         ],
 *         next: "STRING_VALUE",
 *       },
 *       filter: {
 *         name: "STRING_VALUE", // required
 *         filter: "STRING_VALUE", // required
 *         next: "STRING_VALUE",
 *       },
 *       math: {
 *         name: "STRING_VALUE", // required
 *         attribute: "STRING_VALUE", // required
 *         math: "STRING_VALUE", // required
 *         next: "STRING_VALUE",
 *       },
 *       deviceRegistryEnrich: {
 *         name: "STRING_VALUE", // required
 *         attribute: "STRING_VALUE", // required
 *         thingName: "STRING_VALUE", // required
 *         roleArn: "STRING_VALUE", // required
 *         next: "STRING_VALUE",
 *       },
 *       deviceShadowEnrich: {
 *         name: "STRING_VALUE", // required
 *         attribute: "STRING_VALUE", // required
 *         thingName: "STRING_VALUE", // required
 *         roleArn: "STRING_VALUE", // required
 *         next: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   tags: [
 *     {
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreatePipelineCommandInput - {@link CreatePipelineCommandInput}
 * @returns {@link CreatePipelineCommandOutput}
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The command caused an internal limit to be exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource with the same name already exists.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 *
 */
export class CreatePipelineCommand extends $Command<
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
  IoTAnalyticsClientResolvedConfig
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
  constructor(readonly input: CreatePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePipelineCommandInput, CreatePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "CreatePipelineCommand";
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
  private serialize(input: CreatePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePipelineCommandOutput> {
    return deserializeAws_restJson1CreatePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
