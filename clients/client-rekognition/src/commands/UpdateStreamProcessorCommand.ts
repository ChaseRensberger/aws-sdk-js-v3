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

import { UpdateStreamProcessorRequest, UpdateStreamProcessorResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateStreamProcessorCommand,
  serializeAws_json1_1UpdateStreamProcessorCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 *
 * The input for {@link UpdateStreamProcessorCommand}.
 */
export interface UpdateStreamProcessorCommandInput extends UpdateStreamProcessorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStreamProcessorCommand}.
 */
export interface UpdateStreamProcessorCommandOutput extends UpdateStreamProcessorResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             Allows you to update a stream processor. You can change some settings and regions of interest and delete certain parameters.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, UpdateStreamProcessorCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, UpdateStreamProcessorCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = {
 *   Name: "STRING_VALUE", // required
 *   SettingsForUpdate: {
 *     ConnectedHomeForUpdate: {
 *       Labels: [
 *         "STRING_VALUE",
 *       ],
 *       MinConfidence: Number("float"),
 *     },
 *   },
 *   RegionsOfInterestForUpdate: [
 *     {
 *       BoundingBox: {
 *         Width: Number("float"),
 *         Height: Number("float"),
 *         Left: Number("float"),
 *         Top: Number("float"),
 *       },
 *       Polygon: [
 *         {
 *           X: Number("float"),
 *           Y: Number("float"),
 *         },
 *       ],
 *     },
 *   ],
 *   DataSharingPreferenceForUpdate: {
 *     OptIn: true || false, // required
 *   },
 *   ParametersToDelete: [
 *     "ConnectedHomeMinConfidence" || "RegionsOfInterest",
 *   ],
 * };
 * const command = new UpdateStreamProcessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateStreamProcessorCommandInput - {@link UpdateStreamProcessorCommandInput}
 * @returns {@link UpdateStreamProcessorCommandOutput}
 * @see {@link UpdateStreamProcessorCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamProcessorCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 *
 */
export class UpdateStreamProcessorCommand extends $Command<
  UpdateStreamProcessorCommandInput,
  UpdateStreamProcessorCommandOutput,
  RekognitionClientResolvedConfig
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
  constructor(readonly input: UpdateStreamProcessorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStreamProcessorCommandInput, UpdateStreamProcessorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateStreamProcessorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "UpdateStreamProcessorCommand";
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
  private serialize(input: UpdateStreamProcessorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateStreamProcessorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStreamProcessorCommandOutput> {
    return deserializeAws_json1_1UpdateStreamProcessorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
