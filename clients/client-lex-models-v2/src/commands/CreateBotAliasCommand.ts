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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateBotAliasRequest, CreateBotAliasResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBotAliasCommand,
  serializeAws_restJson1CreateBotAliasCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateBotAliasCommand}.
 */
export interface CreateBotAliasCommandInput extends CreateBotAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateBotAliasCommand}.
 */
export interface CreateBotAliasCommandOutput extends CreateBotAliasResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an alias for the specified version of a bot. Use an alias to
 *          enable you to change the version of a bot without updating applications
 *          that use the bot.</p>
 *          <p>For example, you can create an alias called "PROD" that your
 *          applications use to call the Amazon Lex bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = {
 *   botAliasName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   botVersion: "STRING_VALUE",
 *   botAliasLocaleSettings: {
 *     "<keys>": {
 *       enabled: true || false, // required
 *       codeHookSpecification: {
 *         lambdaCodeHook: {
 *           lambdaARN: "STRING_VALUE", // required
 *           codeHookInterfaceVersion: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   },
 *   conversationLogSettings: {
 *     textLogSettings: [
 *       {
 *         enabled: true || false, // required
 *         destination: {
 *           cloudWatch: {
 *             cloudWatchLogGroupArn: "STRING_VALUE", // required
 *             logPrefix: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     ],
 *     audioLogSettings: [
 *       {
 *         enabled: true || false, // required
 *         destination: {
 *           s3Bucket: {
 *             kmsKeyArn: "STRING_VALUE",
 *             s3BucketArn: "STRING_VALUE", // required
 *             logPrefix: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   sentimentAnalysisSettings: {
 *     detectSentiment: true || false, // required
 *   },
 *   botId: "STRING_VALUE", // required
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBotAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateBotAliasCommandInput - {@link CreateBotAliasCommandInput}
 * @returns {@link CreateBotAliasCommandOutput}
 * @see {@link CreateBotAliasCommandInput} for command's `input` shape.
 * @see {@link CreateBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 *
 */
export class CreateBotAliasCommand extends $Command<
  CreateBotAliasCommandInput,
  CreateBotAliasCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: CreateBotAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBotAliasCommandInput, CreateBotAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBotAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "CreateBotAliasCommand";
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
  private serialize(input: CreateBotAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBotAliasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBotAliasCommandOutput> {
    return deserializeAws_restJson1CreateBotAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
