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
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { CreateJobRequest, CreateJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateJobCommand,
  serializeAws_restJson1CreateJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified
 *             plus information about the job that is created.</p>
 *         <p>If you have specified more than one output for your jobs (for example, one output for the
 *             Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to
 *             list the jobs (as opposed to the AWS Console).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, CreateJobCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, CreateJobCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const input = {
 *   PipelineId: "STRING_VALUE", // required
 *   Input: {
 *     Key: "STRING_VALUE",
 *     FrameRate: "STRING_VALUE",
 *     Resolution: "STRING_VALUE",
 *     AspectRatio: "STRING_VALUE",
 *     Interlaced: "STRING_VALUE",
 *     Container: "STRING_VALUE",
 *     Encryption: {
 *       Mode: "STRING_VALUE",
 *       Key: "STRING_VALUE",
 *       KeyMd5: "STRING_VALUE",
 *       InitializationVector: "STRING_VALUE",
 *     },
 *     TimeSpan: {
 *       StartTime: "STRING_VALUE",
 *       Duration: "STRING_VALUE",
 *     },
 *     InputCaptions: {
 *       MergePolicy: "STRING_VALUE",
 *       CaptionSources: [
 *         {
 *           Key: "STRING_VALUE",
 *           Language: "STRING_VALUE",
 *           TimeOffset: "STRING_VALUE",
 *           Label: "STRING_VALUE",
 *           Encryption: {
 *             Mode: "STRING_VALUE",
 *             Key: "STRING_VALUE",
 *             KeyMd5: "STRING_VALUE",
 *             InitializationVector: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *     DetectedProperties: {
 *       Width: Number("int"),
 *       Height: Number("int"),
 *       FrameRate: "STRING_VALUE",
 *       FileSize: Number("long"),
 *       DurationMillis: Number("long"),
 *     },
 *   },
 *   Inputs: [
 *     {
 *       Key: "STRING_VALUE",
 *       FrameRate: "STRING_VALUE",
 *       Resolution: "STRING_VALUE",
 *       AspectRatio: "STRING_VALUE",
 *       Interlaced: "STRING_VALUE",
 *       Container: "STRING_VALUE",
 *       Encryption: {
 *         Mode: "<Encryption>",
 *         Key: "<Encryption>",
 *         KeyMd5: "<Encryption>",
 *         InitializationVector: "<Encryption>",
 *       },
 *       TimeSpan: {
 *         StartTime: "STRING_VALUE",
 *         Duration: "STRING_VALUE",
 *       },
 *       InputCaptions: {
 *         MergePolicy: "STRING_VALUE",
 *         CaptionSources: [
 *           {
 *             Key: "STRING_VALUE",
 *             Language: "STRING_VALUE",
 *             TimeOffset: "STRING_VALUE",
 *             Label: "STRING_VALUE",
 *             Encryption: {
 *               Mode: "<Encryption>",
 *               Key: "<Encryption>",
 *               KeyMd5: "<Encryption>",
 *               InitializationVector: "<Encryption>",
 *             },
 *           },
 *         ],
 *       },
 *       DetectedProperties: {
 *         Width: Number("int"),
 *         Height: Number("int"),
 *         FrameRate: "STRING_VALUE",
 *         FileSize: Number("long"),
 *         DurationMillis: Number("long"),
 *       },
 *     },
 *   ],
 *   Output: {
 *     Key: "STRING_VALUE",
 *     ThumbnailPattern: "STRING_VALUE",
 *     ThumbnailEncryption: {
 *       Mode: "<Encryption>",
 *       Key: "<Encryption>",
 *       KeyMd5: "<Encryption>",
 *       InitializationVector: "<Encryption>",
 *     },
 *     Rotate: "STRING_VALUE",
 *     PresetId: "STRING_VALUE",
 *     SegmentDuration: "STRING_VALUE",
 *     Watermarks: [
 *       {
 *         PresetWatermarkId: "STRING_VALUE",
 *         InputKey: "STRING_VALUE",
 *         Encryption: {
 *           Mode: "<Encryption>",
 *           Key: "<Encryption>",
 *           KeyMd5: "<Encryption>",
 *           InitializationVector: "<Encryption>",
 *         },
 *       },
 *     ],
 *     AlbumArt: {
 *       MergePolicy: "STRING_VALUE",
 *       Artwork: [
 *         {
 *           InputKey: "STRING_VALUE",
 *           MaxWidth: "STRING_VALUE",
 *           MaxHeight: "STRING_VALUE",
 *           SizingPolicy: "STRING_VALUE",
 *           PaddingPolicy: "STRING_VALUE",
 *           AlbumArtFormat: "STRING_VALUE",
 *           Encryption: {
 *             Mode: "<Encryption>",
 *             Key: "<Encryption>",
 *             KeyMd5: "<Encryption>",
 *             InitializationVector: "<Encryption>",
 *           },
 *         },
 *       ],
 *     },
 *     Composition: [
 *       {
 *         TimeSpan: {
 *           StartTime: "<TimeSpan>",
 *           Duration: "<TimeSpan>",
 *         },
 *       },
 *     ],
 *     Captions: {
 *       MergePolicy: "STRING_VALUE",
 *       CaptionSources: [
 *         {
 *           Key: "STRING_VALUE",
 *           Language: "STRING_VALUE",
 *           TimeOffset: "STRING_VALUE",
 *           Label: "STRING_VALUE",
 *           Encryption: {
 *             Mode: "<Encryption>",
 *             Key: "<Encryption>",
 *             KeyMd5: "<Encryption>",
 *             InitializationVector: "<Encryption>",
 *           },
 *         },
 *       ],
 *       CaptionFormats: [
 *         {
 *           Format: "STRING_VALUE",
 *           Pattern: "STRING_VALUE",
 *           Encryption: {
 *             Mode: "<Encryption>",
 *             Key: "<Encryption>",
 *             KeyMd5: "<Encryption>",
 *             InitializationVector: "<Encryption>",
 *           },
 *         },
 *       ],
 *     },
 *     Encryption: {
 *       Mode: "<Encryption>",
 *       Key: "<Encryption>",
 *       KeyMd5: "<Encryption>",
 *       InitializationVector: "<Encryption>",
 *     },
 *   },
 *   Outputs: [
 *     {
 *       Key: "STRING_VALUE",
 *       ThumbnailPattern: "STRING_VALUE",
 *       ThumbnailEncryption: {
 *         Mode: "<Encryption>",
 *         Key: "<Encryption>",
 *         KeyMd5: "<Encryption>",
 *         InitializationVector: "<Encryption>",
 *       },
 *       Rotate: "STRING_VALUE",
 *       PresetId: "STRING_VALUE",
 *       SegmentDuration: "STRING_VALUE",
 *       Watermarks: [
 *         {
 *           PresetWatermarkId: "STRING_VALUE",
 *           InputKey: "STRING_VALUE",
 *           Encryption: {
 *             Mode: "<Encryption>",
 *             Key: "<Encryption>",
 *             KeyMd5: "<Encryption>",
 *             InitializationVector: "<Encryption>",
 *           },
 *         },
 *       ],
 *       AlbumArt: {
 *         MergePolicy: "STRING_VALUE",
 *         Artwork: [
 *           {
 *             InputKey: "STRING_VALUE",
 *             MaxWidth: "STRING_VALUE",
 *             MaxHeight: "STRING_VALUE",
 *             SizingPolicy: "STRING_VALUE",
 *             PaddingPolicy: "STRING_VALUE",
 *             AlbumArtFormat: "STRING_VALUE",
 *             Encryption: {
 *               Mode: "<Encryption>",
 *               Key: "<Encryption>",
 *               KeyMd5: "<Encryption>",
 *               InitializationVector: "<Encryption>",
 *             },
 *           },
 *         ],
 *       },
 *       Composition: [
 *         {
 *           TimeSpan: {
 *             StartTime: "<TimeSpan>",
 *             Duration: "<TimeSpan>",
 *           },
 *         },
 *       ],
 *       Captions: {
 *         MergePolicy: "STRING_VALUE",
 *         CaptionSources: [
 *           {
 *             Key: "STRING_VALUE",
 *             Language: "STRING_VALUE",
 *             TimeOffset: "STRING_VALUE",
 *             Label: "STRING_VALUE",
 *             Encryption: {
 *               Mode: "<Encryption>",
 *               Key: "<Encryption>",
 *               KeyMd5: "<Encryption>",
 *               InitializationVector: "<Encryption>",
 *             },
 *           },
 *         ],
 *         CaptionFormats: [
 *           {
 *             Format: "STRING_VALUE",
 *             Pattern: "STRING_VALUE",
 *             Encryption: {
 *               Mode: "<Encryption>",
 *               Key: "<Encryption>",
 *               KeyMd5: "<Encryption>",
 *               InitializationVector: "<Encryption>",
 *             },
 *           },
 *         ],
 *       },
 *       Encryption: {
 *         Mode: "<Encryption>",
 *         Key: "<Encryption>",
 *         KeyMd5: "<Encryption>",
 *         InitializationVector: "<Encryption>",
 *       },
 *     },
 *   ],
 *   OutputKeyPrefix: "STRING_VALUE",
 *   Playlists: [
 *     {
 *       Name: "STRING_VALUE",
 *       Format: "STRING_VALUE",
 *       OutputKeys: [
 *         "STRING_VALUE",
 *       ],
 *       HlsContentProtection: {
 *         Method: "STRING_VALUE",
 *         Key: "STRING_VALUE",
 *         KeyMd5: "STRING_VALUE",
 *         InitializationVector: "STRING_VALUE",
 *         LicenseAcquisitionUrl: "STRING_VALUE",
 *         KeyStoragePolicy: "STRING_VALUE",
 *       },
 *       PlayReadyDrm: {
 *         Format: "STRING_VALUE",
 *         Key: "STRING_VALUE",
 *         KeyMd5: "STRING_VALUE",
 *         KeyId: "STRING_VALUE",
 *         InitializationVector: "STRING_VALUE",
 *         LicenseAcquisitionUrl: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   UserMetadata: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for ElasticTranscoderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>General authentication failure. The request was not signed correctly.</p>
 *
 * @throws {@link IncompatibleVersionException} (client fault)
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Elastic Transcoder encountered an unexpected exception while trying to fulfill the request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Too many operations for a given AWS account. For example, the number of pipelines
 *             exceeds the maximum allowed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist or is not available. For example, the pipeline
 *             to which you're trying to add a job doesn't exist or is still being created.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more required parameter values were not provided in the request.</p>
 *
 *
 */
export class CreateJobCommand extends $Command<
  CreateJobCommandInput,
  CreateJobCommandOutput,
  ElasticTranscoderClientResolvedConfig
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
  constructor(readonly input: CreateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateJobCommandInput, CreateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "CreateJobCommand";
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
  private serialize(input: CreateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobCommandOutput> {
    return deserializeAws_restJson1CreateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
