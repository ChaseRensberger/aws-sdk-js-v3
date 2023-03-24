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

import { UpdateSegmentRequest, UpdateSegmentResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1UpdateSegmentCommand,
  serializeAws_restJson1UpdateSegmentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateSegmentCommand}.
 */
export interface UpdateSegmentCommandInput extends UpdateSegmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSegmentCommand}.
 */
export interface UpdateSegmentCommandOutput extends UpdateSegmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateSegmentCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateSegmentCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = {
 *   ApplicationId: "STRING_VALUE", // required
 *   SegmentId: "STRING_VALUE", // required
 *   WriteSegmentRequest: {
 *     Dimensions: {
 *       Attributes: {
 *         "<keys>": {
 *           AttributeType: "STRING_VALUE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       Behavior: {
 *         Recency: {
 *           Duration: "STRING_VALUE", // required
 *           RecencyType: "STRING_VALUE", // required
 *         },
 *       },
 *       Demographic: {
 *         AppVersion: {
 *           DimensionType: "STRING_VALUE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Channel: {
 *           DimensionType: "STRING_VALUE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         DeviceType: {
 *           DimensionType: "STRING_VALUE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Make: {
 *           DimensionType: "STRING_VALUE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Model: {
 *           DimensionType: "STRING_VALUE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Platform: {
 *           DimensionType: "STRING_VALUE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       Location: {
 *         Country: {
 *           DimensionType: "STRING_VALUE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         GPSPoint: {
 *           Coordinates: {
 *             Latitude: Number("double"), // required
 *             Longitude: Number("double"), // required
 *           },
 *           RangeInKilometers: Number("double"),
 *         },
 *       },
 *       Metrics: {
 *         "<keys>": {
 *           ComparisonOperator: "STRING_VALUE", // required
 *           Value: Number("double"), // required
 *         },
 *       },
 *       UserAttributes: {
 *         "<keys>": {
 *           AttributeType: "STRING_VALUE",
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *     Name: "STRING_VALUE",
 *     SegmentGroups: {
 *       Groups: [
 *         {
 *           Dimensions: [
 *             {
 *               Attributes: {
 *                 "<keys>": {
 *                   AttributeType: "STRING_VALUE",
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *               },
 *               Behavior: {
 *                 Recency: {
 *                   Duration: "STRING_VALUE", // required
 *                   RecencyType: "STRING_VALUE", // required
 *                 },
 *               },
 *               Demographic: {
 *                 AppVersion: {
 *                   DimensionType: "STRING_VALUE",
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *                 Channel: {
 *                   DimensionType: "STRING_VALUE",
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *                 DeviceType: {
 *                   DimensionType: "STRING_VALUE",
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *                 Make: {
 *                   DimensionType: "STRING_VALUE",
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *                 Model: {
 *                   DimensionType: "STRING_VALUE",
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *                 Platform: {
 *                   DimensionType: "STRING_VALUE",
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *               },
 *               Location: {
 *                 Country: {
 *                   DimensionType: "STRING_VALUE",
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *                 GPSPoint: {
 *                   Coordinates: {
 *                     Latitude: Number("double"), // required
 *                     Longitude: Number("double"), // required
 *                   },
 *                   RangeInKilometers: Number("double"),
 *                 },
 *               },
 *               Metrics: {
 *                 "<keys>": {
 *                   ComparisonOperator: "STRING_VALUE", // required
 *                   Value: Number("double"), // required
 *                 },
 *               },
 *               UserAttributes: {
 *                 "<keys>": {
 *                   AttributeType: "STRING_VALUE",
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *               },
 *             },
 *           ],
 *           SourceSegments: [
 *             {
 *               Id: "STRING_VALUE", // required
 *               Version: Number("int"),
 *             },
 *           ],
 *           SourceType: "STRING_VALUE",
 *           Type: "STRING_VALUE",
 *         },
 *       ],
 *       Include: "STRING_VALUE",
 *     },
 *     tags: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateSegmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateSegmentCommandInput - {@link UpdateSegmentCommandInput}
 * @returns {@link UpdateSegmentCommandOutput}
 * @see {@link UpdateSegmentCommandInput} for command's `input` shape.
 * @see {@link UpdateSegmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 *
 */
export class UpdateSegmentCommand extends $Command<
  UpdateSegmentCommandInput,
  UpdateSegmentCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: UpdateSegmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSegmentCommandInput, UpdateSegmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateSegmentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateSegmentCommand";
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
  private serialize(input: UpdateSegmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSegmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSegmentCommandOutput> {
    return deserializeAws_restJson1UpdateSegmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
