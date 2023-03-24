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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ConfigIdResponse, UpdateConfigRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateConfigCommand,
  serializeAws_restJson1UpdateConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateConfigCommand}.
 */
export interface UpdateConfigCommandInput extends UpdateConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigCommand}.
 */
export interface UpdateConfigCommandOutput extends ConfigIdResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the <code>Config</code> used when scheduling contacts.</p>
 *          <p>Updating a <code>Config</code> will not update the execution parameters
 *          for existing future contacts scheduled with this <code>Config</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateConfigCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateConfigCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = {
 *   configId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   configType: "STRING_VALUE", // required
 *   configData: { // Union: only one key present
 *     antennaDownlinkConfig: {
 *       spectrumConfig: {
 *         centerFrequency: {
 *           value: Number("double"), // required
 *           units: "STRING_VALUE", // required
 *         },
 *         bandwidth: {
 *           value: Number("double"), // required
 *           units: "STRING_VALUE", // required
 *         },
 *         polarization: "STRING_VALUE",
 *       },
 *     },
 *     trackingConfig: {
 *       autotrack: "STRING_VALUE", // required
 *     },
 *     dataflowEndpointConfig: {
 *       dataflowEndpointName: "STRING_VALUE", // required
 *       dataflowEndpointRegion: "STRING_VALUE",
 *     },
 *     antennaDownlinkDemodDecodeConfig: {
 *       spectrumConfig: {
 *         centerFrequency: {
 *           value: Number("double"), // required
 *           units: "STRING_VALUE", // required
 *         },
 *         bandwidth: {
 *           value: Number("double"), // required
 *           units: "STRING_VALUE", // required
 *         },
 *         polarization: "STRING_VALUE",
 *       },
 *       demodulationConfig: {
 *         unvalidatedJSON: "STRING_VALUE", // required
 *       },
 *       decodeConfig: {
 *         unvalidatedJSON: "STRING_VALUE", // required
 *       },
 *     },
 *     antennaUplinkConfig: {
 *       transmitDisabled: true || false,
 *       spectrumConfig: {
 *         centerFrequency: {
 *           value: Number("double"), // required
 *           units: "STRING_VALUE", // required
 *         },
 *         polarization: "STRING_VALUE",
 *       },
 *       targetEirp: {
 *         value: Number("double"), // required
 *         units: "STRING_VALUE", // required
 *       },
 *     },
 *     uplinkEchoConfig: {
 *       enabled: true || false, // required
 *       antennaUplinkConfigArn: "STRING_VALUE", // required
 *     },
 *     s3RecordingConfig: {
 *       bucketArn: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateConfigCommandInput - {@link UpdateConfigCommandInput}
 * @returns {@link UpdateConfigCommandOutput}
 * @see {@link UpdateConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 *
 */
export class UpdateConfigCommand extends $Command<
  UpdateConfigCommandInput,
  UpdateConfigCommandOutput,
  GroundStationClientResolvedConfig
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
  constructor(readonly input: UpdateConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConfigCommandInput, UpdateConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateConfigCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "UpdateConfigCommand";
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
  private serialize(input: UpdateConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConfigCommandOutput> {
    return deserializeAws_restJson1UpdateConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
