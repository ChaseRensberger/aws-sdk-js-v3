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

import { BatchUpdateFindingsRequest, BatchUpdateFindingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1BatchUpdateFindingsCommand,
  serializeAws_restJson1BatchUpdateFindingsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 *
 * The input for {@link BatchUpdateFindingsCommand}.
 */
export interface BatchUpdateFindingsCommandInput extends BatchUpdateFindingsRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateFindingsCommand}.
 */
export interface BatchUpdateFindingsCommandOutput extends BatchUpdateFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Used by Security Hub customers to update information about their investigation into a finding.
 *          Requested by administrator accounts or member accounts. Administrator accounts can update findings for
 *          their account and their member accounts. Member accounts can update findings for their
 *          account.</p>
 *          <p>Updates from <code>BatchUpdateFindings</code> do not affect the value of
 *             <code>UpdatedAt</code> for a finding.</p>
 *          <p>Administrator and member accounts can use <code>BatchUpdateFindings</code> to update the
 *          following finding fields and objects.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Confidence</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Criticality</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Note</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RelatedFindings</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Severity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Types</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UserDefinedFields</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>VerificationState</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Workflow</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You can configure IAM policies to restrict access to fields and field values. For
 *          example, you might not want member accounts to be able to suppress findings or change the
 *          finding severity. See <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchupdatefindings.html#batchupdatefindings-configure-access">Configuring access to BatchUpdateFindings</a> in the
 *          <i>Security Hub User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchUpdateFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchUpdateFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = {
 *   FindingIdentifiers: [ // required
 *     {
 *       Id: "STRING_VALUE", // required
 *       ProductArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   Note: {
 *     Text: "STRING_VALUE", // required
 *     UpdatedBy: "STRING_VALUE", // required
 *   },
 *   Severity: {
 *     Normalized: Number("int"),
 *     Product: Number("double"),
 *     Label: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 *   },
 *   VerificationState: "UNKNOWN" || "TRUE_POSITIVE" || "FALSE_POSITIVE" || "BENIGN_POSITIVE",
 *   Confidence: Number("int"),
 *   Criticality: Number("int"),
 *   Types: [
 *     "STRING_VALUE",
 *   ],
 *   UserDefinedFields: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Workflow: {
 *     Status: "NEW" || "NOTIFIED" || "RESOLVED" || "SUPPRESSED",
 *   },
 *   RelatedFindings: [
 *     {
 *       ProductArn: "STRING_VALUE", // required
 *       Id: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchUpdateFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchUpdateFindingsCommandInput - {@link BatchUpdateFindingsCommandInput}
 * @returns {@link BatchUpdateFindingsCommandOutput}
 * @see {@link BatchUpdateFindingsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 *
 */
export class BatchUpdateFindingsCommand extends $Command<
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: BatchUpdateFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdateFindingsCommandInput, BatchUpdateFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdateFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchUpdateFindingsCommand";
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
  private serialize(input: BatchUpdateFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateFindingsCommandOutput> {
    return deserializeAws_restJson1BatchUpdateFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
