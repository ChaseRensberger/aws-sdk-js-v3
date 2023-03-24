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

import { AssociateMemberToGroupRequest, AssociateMemberToGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateMemberToGroupCommand,
  serializeAws_json1_1AssociateMemberToGroupCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 *
 * The input for {@link AssociateMemberToGroupCommand}.
 */
export interface AssociateMemberToGroupCommandInput extends AssociateMemberToGroupRequest {}
/**
 * @public
 *
 * The output of {@link AssociateMemberToGroupCommand}.
 */
export interface AssociateMemberToGroupCommandOutput extends AssociateMemberToGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a member (user or group) to the group's set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssociateMemberToGroupCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, AssociateMemberToGroupCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = {
 *   OrganizationId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE", // required
 * };
 * const command = new AssociateMemberToGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AssociateMemberToGroupCommandInput - {@link AssociateMemberToGroupCommandInput}
 * @returns {@link AssociateMemberToGroupCommandOutput}
 * @see {@link AssociateMemberToGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberToGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link DirectoryServiceAuthenticationFailedException} (client fault)
 *  <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The directory is unavailable. It might be located in another Region or deleted.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link EntityStateException} (client fault)
 *  <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>You can't perform a write operation against a read-only directory.</p>
 *
 *
 */
export class AssociateMemberToGroupCommand extends $Command<
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput,
  WorkMailClientResolvedConfig
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
  constructor(readonly input: AssociateMemberToGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateMemberToGroupCommandInput, AssociateMemberToGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateMemberToGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "AssociateMemberToGroupCommand";
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
  private serialize(input: AssociateMemberToGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateMemberToGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateMemberToGroupCommandOutput> {
    return deserializeAws_json1_1AssociateMemberToGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
