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

import { VerifyDomainDkimRequest, VerifyDomainDkimResponse } from "../models/models_0";
import {
  deserializeAws_queryVerifyDomainDkimCommand,
  serializeAws_queryVerifyDomainDkimCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 *
 * The input for {@link VerifyDomainDkimCommand}.
 */
export interface VerifyDomainDkimCommandInput extends VerifyDomainDkimRequest {}
/**
 * @public
 *
 * The output of {@link VerifyDomainDkimCommand}.
 */
export interface VerifyDomainDkimCommandOutput extends VerifyDomainDkimResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a set of DKIM tokens for a domain identity.</p>
 *         <important>
 *             <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you
 *                 specify is added to the list of identities that are associated with your account.
 *                 This is true even if you haven't already associated the domain with your account by
 *                 using the <code>VerifyDomainIdentity</code> operation. However, you can't send email
 *                 from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you
 *                 successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for
 *                 it</a>.</p>
 *         </important>
 *         <p>You use the tokens that are generated by this operation to create CNAME records. When
 *             Amazon SES detects that you've added these records to the DNS configuration for a domain, you
 *             can start sending email from that domain. You can start sending email even if you
 *             haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS
 *             configuration for your domain. All email that you send from the domain is authenticated
 *             using DKIM.</p>
 *         <p>To create the CNAME records for DKIM authentication, use the following values:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Name</b>:
 *                         <i>token</i>._domainkey.<i>example.com</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Type</b>: CNAME</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Value</b>:
 *                     <i>token</i>.dkim.amazonses.com</p>
 *             </li>
 *          </ul>
 *         <p>In the preceding example, replace <i>token</i> with one of the tokens
 *             that are generated when you execute this operation. Replace
 *                 <i>example.com</i> with your domain. Repeat this process for each
 *             token that's generated by this operation.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyDomainDkimCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyDomainDkimCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {
 *   Domain: "STRING_VALUE", // required
 * };
 * const command = new VerifyDomainDkimCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param VerifyDomainDkimCommandInput - {@link VerifyDomainDkimCommandInput}
 * @returns {@link VerifyDomainDkimCommandOutput}
 * @see {@link VerifyDomainDkimCommandInput} for command's `input` shape.
 * @see {@link VerifyDomainDkimCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 *
 * @example VerifyDomainDkim
 * ```javascript
 * // The following example generates DKIM tokens for a domain that has been verified with Amazon SES:
 * const input = {
 *   "Domain": "example.com"
 * };
 * const command = new VerifyDomainDkimCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DkimTokens": [
 *     "EXAMPLEq76owjnks3lnluwg65scbemvw",
 *     "EXAMPLEi3dnsj67hstzaj673klariwx2",
 *     "EXAMPLEwfbtcukvimehexktmdtaz6naj"
 *   ]
 * }
 * *\/
 * // example id: verifydomaindkim-1469049503083
 * ```
 *
 */
export class VerifyDomainDkimCommand extends $Command<
  VerifyDomainDkimCommandInput,
  VerifyDomainDkimCommandOutput,
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
  constructor(readonly input: VerifyDomainDkimCommandInput) {
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
  ): Handler<VerifyDomainDkimCommandInput, VerifyDomainDkimCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VerifyDomainDkimCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "VerifyDomainDkimCommand";
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
  private serialize(input: VerifyDomainDkimCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryVerifyDomainDkimCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyDomainDkimCommandOutput> {
    return deserializeAws_queryVerifyDomainDkimCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
