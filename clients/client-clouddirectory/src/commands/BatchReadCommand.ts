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

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { BatchReadRequest, BatchReadResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchReadCommand,
  serializeAws_restJson1BatchReadCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link BatchReadCommand}.
 */
export interface BatchReadCommandInput extends BatchReadRequest {}
/**
 * @public
 *
 * The output of {@link BatchReadCommand}.
 */
export interface BatchReadCommandOutput extends BatchReadResponse, __MetadataBearer {}

/**
 * @public
 * <p>Performs all the read operations in a batch. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, BatchReadCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, BatchReadCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = {
 *   DirectoryArn: "STRING_VALUE", // required
 *   Operations: [ // required
 *     {
 *       ListObjectAttributes: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *         FacetFilter: {
 *           SchemaArn: "STRING_VALUE",
 *           FacetName: "STRING_VALUE",
 *         },
 *       },
 *       ListObjectChildren: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListAttachedIndices: {
 *         TargetReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListObjectParentPaths: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       GetObjectInformation: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *       },
 *       GetObjectAttributes: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         SchemaFacet: {
 *           SchemaArn: "STRING_VALUE",
 *           FacetName: "STRING_VALUE",
 *         },
 *         AttributeNames: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ListObjectParents: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListObjectPolicies: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListPolicyAttachments: {
 *         PolicyReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       LookupPolicy: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListIndex: {
 *         RangesOnIndexedValues: [
 *           {
 *             AttributeKey: {
 *               SchemaArn: "STRING_VALUE", // required
 *               FacetName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *             },
 *             Range: {
 *               StartMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               StartValue: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *               EndMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               EndValue: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           },
 *         ],
 *         IndexReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         MaxResults: Number("int"),
 *         NextToken: "STRING_VALUE",
 *       },
 *       ListOutgoingTypedLinks: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         FilterAttributeRanges: [
 *           {
 *             AttributeName: "STRING_VALUE",
 *             Range: {
 *               StartMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               StartValue: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *               EndMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               EndValue: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           },
 *         ],
 *         FilterTypedLink: {
 *           SchemaArn: "STRING_VALUE", // required
 *           TypedLinkName: "STRING_VALUE", // required
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       ListIncomingTypedLinks: {
 *         ObjectReference: {
 *           Selector: "STRING_VALUE",
 *         },
 *         FilterAttributeRanges: [
 *           {
 *             AttributeName: "STRING_VALUE",
 *             Range: {
 *               StartMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               StartValue: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *               EndMode: "FIRST" || "LAST" || "LAST_BEFORE_MISSING_VALUES" || "INCLUSIVE" || "EXCLUSIVE", // required
 *               EndValue: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           },
 *         ],
 *         FilterTypedLink: {
 *           SchemaArn: "STRING_VALUE", // required
 *           TypedLinkName: "STRING_VALUE", // required
 *         },
 *         NextToken: "STRING_VALUE",
 *         MaxResults: Number("int"),
 *       },
 *       GetLinkAttributes: {
 *         TypedLinkSpecifier: {
 *           TypedLinkFacet: {
 *             SchemaArn: "STRING_VALUE", // required
 *             TypedLinkName: "STRING_VALUE", // required
 *           },
 *           SourceObjectReference: {
 *             Selector: "STRING_VALUE",
 *           },
 *           TargetObjectReference: {
 *             Selector: "STRING_VALUE",
 *           },
 *           IdentityAttributeValues: [ // required
 *             {
 *               AttributeName: "STRING_VALUE", // required
 *               Value: { // Union: only one key present
 *                 StringValue: "STRING_VALUE",
 *                 BinaryValue: "BLOB_VALUE",
 *                 BooleanValue: true || false,
 *                 NumberValue: "STRING_VALUE",
 *                 DatetimeValue: new Date("TIMESTAMP"),
 *               },
 *             },
 *           ],
 *         },
 *         AttributeNames: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 * };
 * const command = new BatchReadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchReadCommandInput - {@link BatchReadCommandInput}
 * @returns {@link BatchReadCommandOutput}
 * @see {@link BatchReadCommandInput} for command's `input` shape.
 * @see {@link BatchReadCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *  <p>Operations are only permitted on enabled directories.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 *
 * @throws {@link RetryableConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 *
 *
 */
export class BatchReadCommand extends $Command<
  BatchReadCommandInput,
  BatchReadCommandOutput,
  CloudDirectoryClientResolvedConfig
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
  constructor(readonly input: BatchReadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchReadCommandInput, BatchReadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, BatchReadCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "BatchReadCommand";
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
  private serialize(input: BatchReadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchReadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchReadCommandOutput> {
    return deserializeAws_restJson1BatchReadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
