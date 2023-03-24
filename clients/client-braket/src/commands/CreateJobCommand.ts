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

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
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
 * <p>Creates an Amazon Braket job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, CreateJobCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, CreateJobCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const input = {
 *   clientToken: "STRING_VALUE", // required
 *   algorithmSpecification: {
 *     scriptModeConfig: {
 *       entryPoint: "STRING_VALUE", // required
 *       s3Uri: "STRING_VALUE", // required
 *       compressionType: "STRING_VALUE",
 *     },
 *     containerImage: {
 *       uri: "STRING_VALUE", // required
 *     },
 *   },
 *   inputDataConfig: [
 *     {
 *       channelName: "STRING_VALUE", // required
 *       contentType: "STRING_VALUE",
 *       dataSource: {
 *         s3DataSource: {
 *           s3Uri: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   outputDataConfig: {
 *     kmsKeyId: "STRING_VALUE",
 *     s3Path: "STRING_VALUE", // required
 *   },
 *   checkpointConfig: {
 *     localPath: "STRING_VALUE",
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   jobName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   stoppingCondition: {
 *     maxRuntimeInSeconds: Number("int"),
 *   },
 *   instanceConfig: {
 *     instanceType: "STRING_VALUE", // required
 *     volumeSizeInGb: Number("int"), // required
 *     instanceCount: Number("int"),
 *   },
 *   hyperParameters: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   deviceConfig: {
 *     device: "STRING_VALUE", // required
 *   },
 *   tags: {
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
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred due to a conflict.</p>
 *
 * @throws {@link DeviceRetiredException} (client fault)
 *  <p>The specified device has been retired.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling rate limit is met.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 *
 */
export class CreateJobCommand extends $Command<
  CreateJobCommandInput,
  CreateJobCommandOutput,
  BraketClientResolvedConfig
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
    configuration: BraketClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateJobCommandInput, CreateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BraketClient";
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
