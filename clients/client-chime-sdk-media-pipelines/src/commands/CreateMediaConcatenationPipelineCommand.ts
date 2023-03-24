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

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import {
  CreateMediaConcatenationPipelineRequest,
  CreateMediaConcatenationPipelineRequestFilterSensitiveLog,
  CreateMediaConcatenationPipelineResponse,
  CreateMediaConcatenationPipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMediaConcatenationPipelineCommand,
  serializeAws_restJson1CreateMediaConcatenationPipelineCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateMediaConcatenationPipelineCommand}.
 */
export interface CreateMediaConcatenationPipelineCommandInput extends CreateMediaConcatenationPipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaConcatenationPipelineCommand}.
 */
export interface CreateMediaConcatenationPipelineCommandOutput
  extends CreateMediaConcatenationPipelineResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a media concatenation pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaConcatenationPipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaConcatenationPipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = {
 *   Sources: [ // required
 *     {
 *       Type: "MediaCapturePipeline", // required
 *       MediaCapturePipelineSourceConfiguration: {
 *         MediaPipelineArn: "STRING_VALUE", // required
 *         ChimeSdkMeetingConfiguration: {
 *           ArtifactsConfiguration: {
 *             Audio: {
 *               State: "Enabled", // required
 *             },
 *             Video: {
 *               State: "Enabled" || "Disabled", // required
 *             },
 *             Content: {
 *               State: "Enabled" || "Disabled", // required
 *             },
 *             DataChannel: {
 *               State: "Enabled" || "Disabled", // required
 *             },
 *             TranscriptionMessages: {
 *               State: "Enabled" || "Disabled", // required
 *             },
 *             MeetingEvents: {
 *               State: "Enabled" || "Disabled", // required
 *             },
 *             CompositedVideo: {
 *               State: "Enabled" || "Disabled", // required
 *             },
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   Sinks: [ // required
 *     {
 *       Type: "S3Bucket", // required
 *       S3BucketSinkConfiguration: {
 *         Destination: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMediaConcatenationPipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateMediaConcatenationPipelineCommandInput - {@link CreateMediaConcatenationPipelineCommandInput}
 * @returns {@link CreateMediaConcatenationPipelineCommandOutput}
 * @see {@link CreateMediaConcatenationPipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaConcatenationPipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 *
 */
export class CreateMediaConcatenationPipelineCommand extends $Command<
  CreateMediaConcatenationPipelineCommandInput,
  CreateMediaConcatenationPipelineCommandOutput,
  ChimeSDKMediaPipelinesClientResolvedConfig
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
  constructor(readonly input: CreateMediaConcatenationPipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMediaPipelinesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMediaConcatenationPipelineCommandInput, CreateMediaConcatenationPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMediaConcatenationPipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "CreateMediaConcatenationPipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaConcatenationPipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaConcatenationPipelineResponseFilterSensitiveLog,
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
  private serialize(
    input: CreateMediaConcatenationPipelineCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMediaConcatenationPipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaConcatenationPipelineCommandOutput> {
    return deserializeAws_restJson1CreateMediaConcatenationPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
