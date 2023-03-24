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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { CreateGraphqlApiRequest, CreateGraphqlApiResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateGraphqlApiCommand,
  serializeAws_restJson1CreateGraphqlApiCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateGraphqlApiCommand}.
 */
export interface CreateGraphqlApiCommandInput extends CreateGraphqlApiRequest {}
/**
 * @public
 *
 * The output of {@link CreateGraphqlApiCommand}.
 */
export interface CreateGraphqlApiCommandOutput extends CreateGraphqlApiResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a <code>GraphqlApi</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = {
 *   name: "STRING_VALUE", // required
 *   logConfig: {
 *     fieldLogLevel: "NONE" || "ERROR" || "ALL", // required
 *     cloudWatchLogsRoleArn: "STRING_VALUE", // required
 *     excludeVerboseContent: true || false,
 *   },
 *   authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 *   userPoolConfig: {
 *     userPoolId: "STRING_VALUE", // required
 *     awsRegion: "STRING_VALUE", // required
 *     defaultAction: "ALLOW" || "DENY", // required
 *     appIdClientRegex: "STRING_VALUE",
 *   },
 *   openIDConnectConfig: {
 *     issuer: "STRING_VALUE", // required
 *     clientId: "STRING_VALUE",
 *     iatTTL: Number("long"),
 *     authTTL: Number("long"),
 *   },
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   additionalAuthenticationProviders: [
 *     {
 *       authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA",
 *       openIDConnectConfig: {
 *         issuer: "STRING_VALUE", // required
 *         clientId: "STRING_VALUE",
 *         iatTTL: Number("long"),
 *         authTTL: Number("long"),
 *       },
 *       userPoolConfig: {
 *         userPoolId: "STRING_VALUE", // required
 *         awsRegion: "STRING_VALUE", // required
 *         appIdClientRegex: "STRING_VALUE",
 *       },
 *       lambdaAuthorizerConfig: {
 *         authorizerResultTtlInSeconds: Number("int"),
 *         authorizerUri: "STRING_VALUE", // required
 *         identityValidationExpression: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   xrayEnabled: true || false,
 *   lambdaAuthorizerConfig: {
 *     authorizerResultTtlInSeconds: Number("int"),
 *     authorizerUri: "STRING_VALUE", // required
 *     identityValidationExpression: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateGraphqlApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateGraphqlApiCommandInput - {@link CreateGraphqlApiCommandInput}
 * @returns {@link CreateGraphqlApiCommandOutput}
 * @see {@link CreateGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link CreateGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link ApiLimitExceededException} (client fault)
 *  <p>The GraphQL API exceeded a limit. Try your request again.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the
 *          field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can make your
 *          change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 *
 */
export class CreateGraphqlApiCommand extends $Command<
  CreateGraphqlApiCommandInput,
  CreateGraphqlApiCommandOutput,
  AppSyncClientResolvedConfig
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
  constructor(readonly input: CreateGraphqlApiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGraphqlApiCommandInput, CreateGraphqlApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGraphqlApiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "CreateGraphqlApiCommand";
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
  private serialize(input: CreateGraphqlApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateGraphqlApiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGraphqlApiCommandOutput> {
    return deserializeAws_restJson1CreateGraphqlApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
