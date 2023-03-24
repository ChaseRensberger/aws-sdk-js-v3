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

import { GetCallAnalyticsJobRequest, GetCallAnalyticsJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCallAnalyticsJobCommand,
  serializeAws_json1_1GetCallAnalyticsJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 *
 * The input for {@link GetCallAnalyticsJobCommand}.
 */
export interface GetCallAnalyticsJobCommandInput extends GetCallAnalyticsJobRequest {}
/**
 * @public
 *
 * The output of {@link GetCallAnalyticsJobCommand}.
 */
export interface GetCallAnalyticsJobCommandOutput extends GetCallAnalyticsJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about the specified Call Analytics job.</p>
 *          <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status
 *             is <code>COMPLETED</code>, the job is finished. You can find your completed transcript
 *             at the URI specified in <code>TranscriptFileUri</code>. If the status is
 *                 <code>FAILED</code>, <code>FailureReason</code> provides details on why your
 *             transcription job failed.</p>
 *          <p>If you enabled personally identifiable information (PII) redaction, the redacted
 *             transcript appears at the location specified in
 *             <code>RedactedTranscriptFileUri</code>.</p>
 *          <p>If you chose to redact the audio in your media file, you can find your redacted media
 *             file at the location specified in <code>RedactedMediaFileUri</code>.</p>
 *          <p>To get a list of your Call Analytics jobs, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetCallAnalyticsJobCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetCallAnalyticsJobCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = {
 *   CallAnalyticsJobName: "STRING_VALUE", // required
 * };
 * const command = new GetCallAnalyticsJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetCallAnalyticsJobCommandInput - {@link GetCallAnalyticsJobCommandInput}
 * @returns {@link GetCallAnalyticsJobCommandOutput}
 * @see {@link GetCallAnalyticsJobCommandInput} for command's `input` shape.
 * @see {@link GetCallAnalyticsJobCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>We can't find the requested resource. Check that the specified name is correct and try
 *             your request again.</p>
 *
 *
 */
export class GetCallAnalyticsJobCommand extends $Command<
  GetCallAnalyticsJobCommandInput,
  GetCallAnalyticsJobCommandOutput,
  TranscribeClientResolvedConfig
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
  constructor(readonly input: GetCallAnalyticsJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCallAnalyticsJobCommandInput, GetCallAnalyticsJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCallAnalyticsJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "GetCallAnalyticsJobCommand";
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
  private serialize(input: GetCallAnalyticsJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCallAnalyticsJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCallAnalyticsJobCommandOutput> {
    return deserializeAws_json1_1GetCallAnalyticsJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
