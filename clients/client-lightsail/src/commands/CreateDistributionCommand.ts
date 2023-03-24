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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDistributionRequest, CreateDistributionResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDistributionCommand,
  serializeAws_json1_1CreateDistributionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateDistributionCommand}.
 */
export interface CreateDistributionCommandInput extends CreateDistributionRequest {}
/**
 * @public
 *
 * The output of {@link CreateDistributionCommand}.
 */
export interface CreateDistributionCommandOutput extends CreateDistributionResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p>
 *          <p>A distribution is a globally distributed network of caching servers that improve the
 *       performance of your website or web application hosted on a Lightsail instance. For more
 *       information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = {
 *   distributionName: "STRING_VALUE", // required
 *   origin: {
 *     name: "STRING_VALUE",
 *     regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 *     protocolPolicy: "http-only" || "https-only",
 *   },
 *   defaultCacheBehavior: {
 *     behavior: "dont-cache" || "cache",
 *   },
 *   cacheBehaviorSettings: {
 *     defaultTTL: Number("long"),
 *     minimumTTL: Number("long"),
 *     maximumTTL: Number("long"),
 *     allowedHTTPMethods: "STRING_VALUE",
 *     cachedHTTPMethods: "STRING_VALUE",
 *     forwardedCookies: {
 *       option: "none" || "allow-list" || "all",
 *       cookiesAllowList: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     forwardedHeaders: {
 *       option: "none" || "allow-list" || "all",
 *       headersAllowList: [
 *         "Accept" || "Accept-Charset" || "Accept-Datetime" || "Accept-Encoding" || "Accept-Language" || "Authorization" || "CloudFront-Forwarded-Proto" || "CloudFront-Is-Desktop-Viewer" || "CloudFront-Is-Mobile-Viewer" || "CloudFront-Is-SmartTV-Viewer" || "CloudFront-Is-Tablet-Viewer" || "CloudFront-Viewer-Country" || "Host" || "Origin" || "Referer",
 *       ],
 *     },
 *     forwardedQueryStrings: {
 *       option: true || false,
 *       queryStringsAllowList: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   cacheBehaviors: [
 *     {
 *       path: "STRING_VALUE",
 *       behavior: "dont-cache" || "cache",
 *     },
 *   ],
 *   bundleId: "STRING_VALUE", // required
 *   ipAddressType: "dualstack" || "ipv4",
 *   tags: [
 *     {
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateDistributionCommandInput - {@link CreateDistributionCommandInput}
 * @returns {@link CreateDistributionCommandOutput}
 * @see {@link CreateDistributionCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 *
 */
export class CreateDistributionCommand extends $Command<
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: CreateDistributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDistributionCommandInput, CreateDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDistributionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateDistributionCommand";
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
  private serialize(input: CreateDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDistributionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDistributionCommandOutput> {
    return deserializeAws_json1_1CreateDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
