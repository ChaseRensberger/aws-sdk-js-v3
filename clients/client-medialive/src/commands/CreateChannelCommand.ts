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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateChannelRequest, CreateChannelResponse } from "../models/models_1";
import {
  deserializeAws_restJson1CreateChannelCommand,
  serializeAws_restJson1CreateChannelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandInput extends CreateChannelRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandOutput extends CreateChannelResponse, __MetadataBearer {}

/**
 * @public
 * Creates a new channel
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateChannelCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateChannelCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = {
 *   CdiInputSpecification: {
 *     Resolution: "SD" || "HD" || "FHD" || "UHD",
 *   },
 *   ChannelClass: "STANDARD" || "SINGLE_PIPELINE",
 *   Destinations: [
 *     {
 *       Id: "STRING_VALUE",
 *       MediaPackageSettings: [
 *         {
 *           ChannelId: "STRING_VALUE",
 *         },
 *       ],
 *       MultiplexSettings: {
 *         MultiplexId: "STRING_VALUE",
 *         ProgramName: "STRING_VALUE",
 *       },
 *       Settings: [
 *         {
 *           PasswordParam: "STRING_VALUE",
 *           StreamName: "STRING_VALUE",
 *           Url: "STRING_VALUE",
 *           Username: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   EncoderSettings: {
 *     AudioDescriptions: [ // required
 *       {
 *         AudioNormalizationSettings: {
 *           Algorithm: "ITU_1770_1" || "ITU_1770_2",
 *           AlgorithmControl: "CORRECT_AUDIO",
 *           TargetLkfs: Number("double"),
 *         },
 *         AudioSelectorName: "STRING_VALUE", // required
 *         AudioType: "CLEAN_EFFECTS" || "HEARING_IMPAIRED" || "UNDEFINED" || "VISUAL_IMPAIRED_COMMENTARY",
 *         AudioTypeControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 *         AudioWatermarkingSettings: {
 *           NielsenWatermarksSettings: {
 *             NielsenCbetSettings: {
 *               CbetCheckDigitString: "STRING_VALUE", // required
 *               CbetStepaside: "DISABLED" || "ENABLED", // required
 *               Csid: "STRING_VALUE", // required
 *             },
 *             NielsenDistributionType: "FINAL_DISTRIBUTOR" || "PROGRAM_CONTENT",
 *             NielsenNaesIiNwSettings: {
 *               CheckDigitString: "STRING_VALUE", // required
 *               Sid: Number("double"), // required
 *               Timezone: "AMERICA_PUERTO_RICO" || "US_ALASKA" || "US_ARIZONA" || "US_CENTRAL" || "US_EASTERN" || "US_HAWAII" || "US_MOUNTAIN" || "US_PACIFIC" || "US_SAMOA" || "UTC",
 *             },
 *           },
 *         },
 *         CodecSettings: {
 *           AacSettings: {
 *             Bitrate: Number("double"),
 *             CodingMode: "AD_RECEIVER_MIX" || "CODING_MODE_1_0" || "CODING_MODE_1_1" || "CODING_MODE_2_0" || "CODING_MODE_5_1",
 *             InputType: "BROADCASTER_MIXED_AD" || "NORMAL",
 *             Profile: "HEV1" || "HEV2" || "LC",
 *             RateControlMode: "CBR" || "VBR",
 *             RawFormat: "LATM_LOAS" || "NONE",
 *             SampleRate: Number("double"),
 *             Spec: "MPEG2" || "MPEG4",
 *             VbrQuality: "HIGH" || "LOW" || "MEDIUM_HIGH" || "MEDIUM_LOW",
 *           },
 *           Ac3Settings: {
 *             Bitrate: Number("double"),
 *             BitstreamMode: "COMMENTARY" || "COMPLETE_MAIN" || "DIALOGUE" || "EMERGENCY" || "HEARING_IMPAIRED" || "MUSIC_AND_EFFECTS" || "VISUALLY_IMPAIRED" || "VOICE_OVER",
 *             CodingMode: "CODING_MODE_1_0" || "CODING_MODE_1_1" || "CODING_MODE_2_0" || "CODING_MODE_3_2_LFE",
 *             Dialnorm: Number("int"),
 *             DrcProfile: "FILM_STANDARD" || "NONE",
 *             LfeFilter: "DISABLED" || "ENABLED",
 *             MetadataControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 *           },
 *           Eac3AtmosSettings: {
 *             Bitrate: Number("double"),
 *             CodingMode: "CODING_MODE_5_1_4" || "CODING_MODE_7_1_4" || "CODING_MODE_9_1_6",
 *             Dialnorm: Number("int"),
 *             DrcLine: "FILM_LIGHT" || "FILM_STANDARD" || "MUSIC_LIGHT" || "MUSIC_STANDARD" || "NONE" || "SPEECH",
 *             DrcRf: "FILM_LIGHT" || "FILM_STANDARD" || "MUSIC_LIGHT" || "MUSIC_STANDARD" || "NONE" || "SPEECH",
 *             HeightTrim: Number("double"),
 *             SurroundTrim: Number("double"),
 *           },
 *           Eac3Settings: {
 *             AttenuationControl: "ATTENUATE_3_DB" || "NONE",
 *             Bitrate: Number("double"),
 *             BitstreamMode: "COMMENTARY" || "COMPLETE_MAIN" || "EMERGENCY" || "HEARING_IMPAIRED" || "VISUALLY_IMPAIRED",
 *             CodingMode: "CODING_MODE_1_0" || "CODING_MODE_2_0" || "CODING_MODE_3_2",
 *             DcFilter: "DISABLED" || "ENABLED",
 *             Dialnorm: Number("int"),
 *             DrcLine: "FILM_LIGHT" || "FILM_STANDARD" || "MUSIC_LIGHT" || "MUSIC_STANDARD" || "NONE" || "SPEECH",
 *             DrcRf: "FILM_LIGHT" || "FILM_STANDARD" || "MUSIC_LIGHT" || "MUSIC_STANDARD" || "NONE" || "SPEECH",
 *             LfeControl: "LFE" || "NO_LFE",
 *             LfeFilter: "DISABLED" || "ENABLED",
 *             LoRoCenterMixLevel: Number("double"),
 *             LoRoSurroundMixLevel: Number("double"),
 *             LtRtCenterMixLevel: Number("double"),
 *             LtRtSurroundMixLevel: Number("double"),
 *             MetadataControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 *             PassthroughControl: "NO_PASSTHROUGH" || "WHEN_POSSIBLE",
 *             PhaseControl: "NO_SHIFT" || "SHIFT_90_DEGREES",
 *             StereoDownmix: "DPL2" || "LO_RO" || "LT_RT" || "NOT_INDICATED",
 *             SurroundExMode: "DISABLED" || "ENABLED" || "NOT_INDICATED",
 *             SurroundMode: "DISABLED" || "ENABLED" || "NOT_INDICATED",
 *           },
 *           Mp2Settings: {
 *             Bitrate: Number("double"),
 *             CodingMode: "CODING_MODE_1_0" || "CODING_MODE_2_0",
 *             SampleRate: Number("double"),
 *           },
 *           PassThroughSettings: {},
 *           WavSettings: {
 *             BitDepth: Number("double"),
 *             CodingMode: "CODING_MODE_1_0" || "CODING_MODE_2_0" || "CODING_MODE_4_0" || "CODING_MODE_8_0",
 *             SampleRate: Number("double"),
 *           },
 *         },
 *         LanguageCode: "STRING_VALUE",
 *         LanguageCodeControl: "FOLLOW_INPUT" || "USE_CONFIGURED",
 *         Name: "STRING_VALUE", // required
 *         RemixSettings: {
 *           ChannelMappings: [ // required
 *             {
 *               InputChannelLevels: [ // required
 *                 {
 *                   Gain: Number("int"), // required
 *                   InputChannel: Number("int"), // required
 *                 },
 *               ],
 *               OutputChannel: Number("int"), // required
 *             },
 *           ],
 *           ChannelsIn: Number("int"),
 *           ChannelsOut: Number("int"),
 *         },
 *         StreamName: "STRING_VALUE",
 *       },
 *     ],
 *     AvailBlanking: {
 *       AvailBlankingImage: {
 *         PasswordParam: "STRING_VALUE",
 *         Uri: "STRING_VALUE", // required
 *         Username: "STRING_VALUE",
 *       },
 *       State: "DISABLED" || "ENABLED",
 *     },
 *     AvailConfiguration: {
 *       AvailSettings: {
 *         Esam: {
 *           AcquisitionPointId: "STRING_VALUE", // required
 *           AdAvailOffset: Number("int"),
 *           PasswordParam: "STRING_VALUE",
 *           PoisEndpoint: "STRING_VALUE", // required
 *           Username: "STRING_VALUE",
 *           ZoneIdentity: "STRING_VALUE",
 *         },
 *         Scte35SpliceInsert: {
 *           AdAvailOffset: Number("int"),
 *           NoRegionalBlackoutFlag: "FOLLOW" || "IGNORE",
 *           WebDeliveryAllowedFlag: "FOLLOW" || "IGNORE",
 *         },
 *         Scte35TimeSignalApos: {
 *           AdAvailOffset: Number("int"),
 *           NoRegionalBlackoutFlag: "FOLLOW" || "IGNORE",
 *           WebDeliveryAllowedFlag: "FOLLOW" || "IGNORE",
 *         },
 *       },
 *     },
 *     BlackoutSlate: {
 *       BlackoutSlateImage: {
 *         PasswordParam: "STRING_VALUE",
 *         Uri: "STRING_VALUE", // required
 *         Username: "STRING_VALUE",
 *       },
 *       NetworkEndBlackout: "DISABLED" || "ENABLED",
 *       NetworkEndBlackoutImage: {
 *         PasswordParam: "STRING_VALUE",
 *         Uri: "STRING_VALUE", // required
 *         Username: "STRING_VALUE",
 *       },
 *       NetworkId: "STRING_VALUE",
 *       State: "DISABLED" || "ENABLED",
 *     },
 *     CaptionDescriptions: [
 *       {
 *         Accessibility: "DOES_NOT_IMPLEMENT_ACCESSIBILITY_FEATURES" || "IMPLEMENTS_ACCESSIBILITY_FEATURES",
 *         CaptionSelectorName: "STRING_VALUE", // required
 *         DestinationSettings: {
 *           AribDestinationSettings: {},
 *           BurnInDestinationSettings: {
 *             Alignment: "CENTERED" || "LEFT" || "SMART",
 *             BackgroundColor: "BLACK" || "NONE" || "WHITE",
 *             BackgroundOpacity: Number("int"),
 *             Font: {
 *               PasswordParam: "STRING_VALUE",
 *               Uri: "STRING_VALUE", // required
 *               Username: "STRING_VALUE",
 *             },
 *             FontColor: "BLACK" || "BLUE" || "GREEN" || "RED" || "WHITE" || "YELLOW",
 *             FontOpacity: Number("int"),
 *             FontResolution: Number("int"),
 *             FontSize: "STRING_VALUE",
 *             OutlineColor: "BLACK" || "BLUE" || "GREEN" || "RED" || "WHITE" || "YELLOW",
 *             OutlineSize: Number("int"),
 *             ShadowColor: "BLACK" || "NONE" || "WHITE",
 *             ShadowOpacity: Number("int"),
 *             ShadowXOffset: Number("int"),
 *             ShadowYOffset: Number("int"),
 *             TeletextGridControl: "FIXED" || "SCALED",
 *             XPosition: Number("int"),
 *             YPosition: Number("int"),
 *           },
 *           DvbSubDestinationSettings: {
 *             Alignment: "CENTERED" || "LEFT" || "SMART",
 *             BackgroundColor: "BLACK" || "NONE" || "WHITE",
 *             BackgroundOpacity: Number("int"),
 *             Font: {
 *               PasswordParam: "STRING_VALUE",
 *               Uri: "STRING_VALUE", // required
 *               Username: "STRING_VALUE",
 *             },
 *             FontColor: "BLACK" || "BLUE" || "GREEN" || "RED" || "WHITE" || "YELLOW",
 *             FontOpacity: Number("int"),
 *             FontResolution: Number("int"),
 *             FontSize: "STRING_VALUE",
 *             OutlineColor: "BLACK" || "BLUE" || "GREEN" || "RED" || "WHITE" || "YELLOW",
 *             OutlineSize: Number("int"),
 *             ShadowColor: "BLACK" || "NONE" || "WHITE",
 *             ShadowOpacity: Number("int"),
 *             ShadowXOffset: Number("int"),
 *             ShadowYOffset: Number("int"),
 *             TeletextGridControl: "FIXED" || "SCALED",
 *             XPosition: Number("int"),
 *             YPosition: Number("int"),
 *           },
 *           EbuTtDDestinationSettings: {
 *             CopyrightHolder: "STRING_VALUE",
 *             FillLineGap: "DISABLED" || "ENABLED",
 *             FontFamily: "STRING_VALUE",
 *             StyleControl: "EXCLUDE" || "INCLUDE",
 *           },
 *           EmbeddedDestinationSettings: {},
 *           EmbeddedPlusScte20DestinationSettings: {},
 *           RtmpCaptionInfoDestinationSettings: {},
 *           Scte20PlusEmbeddedDestinationSettings: {},
 *           Scte27DestinationSettings: {},
 *           SmpteTtDestinationSettings: {},
 *           TeletextDestinationSettings: {},
 *           TtmlDestinationSettings: {
 *             StyleControl: "PASSTHROUGH" || "USE_CONFIGURED",
 *           },
 *           WebvttDestinationSettings: {
 *             StyleControl: "NO_STYLE_DATA" || "PASSTHROUGH",
 *           },
 *         },
 *         LanguageCode: "STRING_VALUE",
 *         LanguageDescription: "STRING_VALUE",
 *         Name: "STRING_VALUE", // required
 *       },
 *     ],
 *     FeatureActivations: {
 *       InputPrepareScheduleActions: "DISABLED" || "ENABLED",
 *     },
 *     GlobalConfiguration: {
 *       InitialAudioGain: Number("int"),
 *       InputEndAction: "NONE" || "SWITCH_AND_LOOP_INPUTS",
 *       InputLossBehavior: {
 *         BlackFrameMsec: Number("int"),
 *         InputLossImageColor: "STRING_VALUE",
 *         InputLossImageSlate: {
 *           PasswordParam: "<InputLocation>",
 *           Uri: "<InputLocation>",
 *           Username: "<InputLocation>",
 *         },
 *         InputLossImageType: "COLOR" || "SLATE",
 *         RepeatFrameMsec: Number("int"),
 *       },
 *       OutputLockingMode: "EPOCH_LOCKING" || "PIPELINE_LOCKING",
 *       OutputTimingSource: "INPUT_CLOCK" || "SYSTEM_CLOCK",
 *       SupportLowFramerateInputs: "DISABLED" || "ENABLED",
 *     },
 *     MotionGraphicsConfiguration: {
 *       MotionGraphicsInsertion: "DISABLED" || "ENABLED",
 *       MotionGraphicsSettings: {
 *         HtmlMotionGraphicsSettings: {},
 *       },
 *     },
 *     NielsenConfiguration: {
 *       DistributorId: "STRING_VALUE",
 *       NielsenPcmToId3Tagging: "DISABLED" || "ENABLED",
 *     },
 *     OutputGroups: [ // required
 *       {
 *         Name: "STRING_VALUE",
 *         OutputGroupSettings: {
 *           ArchiveGroupSettings: {
 *             ArchiveCdnSettings: {
 *               ArchiveS3Settings: {
 *                 CannedAcl: "AUTHENTICATED_READ" || "BUCKET_OWNER_FULL_CONTROL" || "BUCKET_OWNER_READ" || "PUBLIC_READ",
 *               },
 *             },
 *             Destination: {
 *               DestinationRefId: "STRING_VALUE",
 *             },
 *             RolloverInterval: Number("int"),
 *           },
 *           FrameCaptureGroupSettings: {
 *             Destination: {
 *               DestinationRefId: "STRING_VALUE",
 *             },
 *             FrameCaptureCdnSettings: {
 *               FrameCaptureS3Settings: {
 *                 CannedAcl: "AUTHENTICATED_READ" || "BUCKET_OWNER_FULL_CONTROL" || "BUCKET_OWNER_READ" || "PUBLIC_READ",
 *               },
 *             },
 *           },
 *           HlsGroupSettings: {
 *             AdMarkers: [
 *               "ADOBE" || "ELEMENTAL" || "ELEMENTAL_SCTE35",
 *             ],
 *             BaseUrlContent: "STRING_VALUE",
 *             BaseUrlContent1: "STRING_VALUE",
 *             BaseUrlManifest: "STRING_VALUE",
 *             BaseUrlManifest1: "STRING_VALUE",
 *             CaptionLanguageMappings: [
 *               {
 *                 CaptionChannel: Number("int"), // required
 *                 LanguageCode: "STRING_VALUE", // required
 *                 LanguageDescription: "STRING_VALUE", // required
 *               },
 *             ],
 *             CaptionLanguageSetting: "INSERT" || "NONE" || "OMIT",
 *             ClientCache: "DISABLED" || "ENABLED",
 *             CodecSpecification: "RFC_4281" || "RFC_6381",
 *             ConstantIv: "STRING_VALUE",
 *             Destination: {
 *               DestinationRefId: "STRING_VALUE",
 *             },
 *             DirectoryStructure: "SINGLE_DIRECTORY" || "SUBDIRECTORY_PER_STREAM",
 *             DiscontinuityTags: "INSERT" || "NEVER_INSERT",
 *             EncryptionType: "AES128" || "SAMPLE_AES",
 *             HlsCdnSettings: {
 *               HlsAkamaiSettings: {
 *                 ConnectionRetryInterval: Number("int"),
 *                 FilecacheDuration: Number("int"),
 *                 HttpTransferMode: "CHUNKED" || "NON_CHUNKED",
 *                 NumRetries: Number("int"),
 *                 RestartDelay: Number("int"),
 *                 Salt: "STRING_VALUE",
 *                 Token: "STRING_VALUE",
 *               },
 *               HlsBasicPutSettings: {
 *                 ConnectionRetryInterval: Number("int"),
 *                 FilecacheDuration: Number("int"),
 *                 NumRetries: Number("int"),
 *                 RestartDelay: Number("int"),
 *               },
 *               HlsMediaStoreSettings: {
 *                 ConnectionRetryInterval: Number("int"),
 *                 FilecacheDuration: Number("int"),
 *                 MediaStoreStorageClass: "TEMPORAL",
 *                 NumRetries: Number("int"),
 *                 RestartDelay: Number("int"),
 *               },
 *               HlsS3Settings: {
 *                 CannedAcl: "AUTHENTICATED_READ" || "BUCKET_OWNER_FULL_CONTROL" || "BUCKET_OWNER_READ" || "PUBLIC_READ",
 *               },
 *               HlsWebdavSettings: {
 *                 ConnectionRetryInterval: Number("int"),
 *                 FilecacheDuration: Number("int"),
 *                 HttpTransferMode: "CHUNKED" || "NON_CHUNKED",
 *                 NumRetries: Number("int"),
 *                 RestartDelay: Number("int"),
 *               },
 *             },
 *             HlsId3SegmentTagging: "DISABLED" || "ENABLED",
 *             IFrameOnlyPlaylists: "DISABLED" || "STANDARD",
 *             IncompleteSegmentBehavior: "AUTO" || "SUPPRESS",
 *             IndexNSegments: Number("int"),
 *             InputLossAction: "EMIT_OUTPUT" || "PAUSE_OUTPUT",
 *             IvInManifest: "EXCLUDE" || "INCLUDE",
 *             IvSource: "EXPLICIT" || "FOLLOWS_SEGMENT_NUMBER",
 *             KeepSegments: Number("int"),
 *             KeyFormat: "STRING_VALUE",
 *             KeyFormatVersions: "STRING_VALUE",
 *             KeyProviderSettings: {
 *               StaticKeySettings: {
 *                 KeyProviderServer: {
 *                   PasswordParam: "<InputLocation>",
 *                   Uri: "<InputLocation>",
 *                   Username: "<InputLocation>",
 *                 },
 *                 StaticKeyValue: "STRING_VALUE", // required
 *               },
 *             },
 *             ManifestCompression: "GZIP" || "NONE",
 *             ManifestDurationFormat: "FLOATING_POINT" || "INTEGER",
 *             MinSegmentLength: Number("int"),
 *             Mode: "LIVE" || "VOD",
 *             OutputSelection: "MANIFESTS_AND_SEGMENTS" || "SEGMENTS_ONLY" || "VARIANT_MANIFESTS_AND_SEGMENTS",
 *             ProgramDateTime: "EXCLUDE" || "INCLUDE",
 *             ProgramDateTimeClock: "INITIALIZE_FROM_OUTPUT_TIMECODE" || "SYSTEM_CLOCK",
 *             ProgramDateTimePeriod: Number("int"),
 *             RedundantManifest: "DISABLED" || "ENABLED",
 *             SegmentLength: Number("int"),
 *             SegmentationMode: "USE_INPUT_SEGMENTATION" || "USE_SEGMENT_DURATION",
 *             SegmentsPerSubdirectory: Number("int"),
 *             StreamInfResolution: "EXCLUDE" || "INCLUDE",
 *             TimedMetadataId3Frame: "NONE" || "PRIV" || "TDRL",
 *             TimedMetadataId3Period: Number("int"),
 *             TimestampDeltaMilliseconds: Number("int"),
 *             TsFileMode: "SEGMENTED_FILES" || "SINGLE_FILE",
 *           },
 *           MediaPackageGroupSettings: {
 *             Destination: {
 *               DestinationRefId: "STRING_VALUE",
 *             },
 *           },
 *           MsSmoothGroupSettings: {
 *             AcquisitionPointId: "STRING_VALUE",
 *             AudioOnlyTimecodeControl: "PASSTHROUGH" || "USE_CONFIGURED_CLOCK",
 *             CertificateMode: "SELF_SIGNED" || "VERIFY_AUTHENTICITY",
 *             ConnectionRetryInterval: Number("int"),
 *             Destination: {
 *               DestinationRefId: "STRING_VALUE",
 *             },
 *             EventId: "STRING_VALUE",
 *             EventIdMode: "NO_EVENT_ID" || "USE_CONFIGURED" || "USE_TIMESTAMP",
 *             EventStopBehavior: "NONE" || "SEND_EOS",
 *             FilecacheDuration: Number("int"),
 *             FragmentLength: Number("int"),
 *             InputLossAction: "EMIT_OUTPUT" || "PAUSE_OUTPUT",
 *             NumRetries: Number("int"),
 *             RestartDelay: Number("int"),
 *             SegmentationMode: "USE_INPUT_SEGMENTATION" || "USE_SEGMENT_DURATION",
 *             SendDelayMs: Number("int"),
 *             SparseTrackType: "NONE" || "SCTE_35" || "SCTE_35_WITHOUT_SEGMENTATION",
 *             StreamManifestBehavior: "DO_NOT_SEND" || "SEND",
 *             TimestampOffset: "STRING_VALUE",
 *             TimestampOffsetMode: "USE_CONFIGURED_OFFSET" || "USE_EVENT_START_DATE",
 *           },
 *           MultiplexGroupSettings: {},
 *           RtmpGroupSettings: {
 *             AdMarkers: [
 *               "ON_CUE_POINT_SCTE35",
 *             ],
 *             AuthenticationScheme: "AKAMAI" || "COMMON",
 *             CacheFullBehavior: "DISCONNECT_IMMEDIATELY" || "WAIT_FOR_SERVER",
 *             CacheLength: Number("int"),
 *             CaptionData: "ALL" || "FIELD1_608" || "FIELD1_AND_FIELD2_608",
 *             InputLossAction: "EMIT_OUTPUT" || "PAUSE_OUTPUT",
 *             RestartDelay: Number("int"),
 *           },
 *           UdpGroupSettings: {
 *             InputLossAction: "DROP_PROGRAM" || "DROP_TS" || "EMIT_PROGRAM",
 *             TimedMetadataId3Frame: "NONE" || "PRIV" || "TDRL",
 *             TimedMetadataId3Period: Number("int"),
 *           },
 *         },
 *         Outputs: [ // required
 *           {
 *             AudioDescriptionNames: [
 *               "STRING_VALUE",
 *             ],
 *             CaptionDescriptionNames: [
 *               "STRING_VALUE",
 *             ],
 *             OutputName: "STRING_VALUE",
 *             OutputSettings: {
 *               ArchiveOutputSettings: {
 *                 ContainerSettings: {
 *                   M2tsSettings: {
 *                     AbsentInputAudioBehavior: "DROP" || "ENCODE_SILENCE",
 *                     Arib: "DISABLED" || "ENABLED",
 *                     AribCaptionsPid: "STRING_VALUE",
 *                     AribCaptionsPidControl: "AUTO" || "USE_CONFIGURED",
 *                     AudioBufferModel: "ATSC" || "DVB",
 *                     AudioFramesPerPes: Number("int"),
 *                     AudioPids: "STRING_VALUE",
 *                     AudioStreamType: "ATSC" || "DVB",
 *                     Bitrate: Number("int"),
 *                     BufferModel: "MULTIPLEX" || "NONE",
 *                     CcDescriptor: "DISABLED" || "ENABLED",
 *                     DvbNitSettings: {
 *                       NetworkId: Number("int"), // required
 *                       NetworkName: "STRING_VALUE", // required
 *                       RepInterval: Number("int"),
 *                     },
 *                     DvbSdtSettings: {
 *                       OutputSdt: "SDT_FOLLOW" || "SDT_FOLLOW_IF_PRESENT" || "SDT_MANUAL" || "SDT_NONE",
 *                       RepInterval: Number("int"),
 *                       ServiceName: "STRING_VALUE",
 *                       ServiceProviderName: "STRING_VALUE",
 *                     },
 *                     DvbSubPids: "STRING_VALUE",
 *                     DvbTdtSettings: {
 *                       RepInterval: Number("int"),
 *                     },
 *                     DvbTeletextPid: "STRING_VALUE",
 *                     Ebif: "NONE" || "PASSTHROUGH",
 *                     EbpAudioInterval: "VIDEO_AND_FIXED_INTERVALS" || "VIDEO_INTERVAL",
 *                     EbpLookaheadMs: Number("int"),
 *                     EbpPlacement: "VIDEO_AND_AUDIO_PIDS" || "VIDEO_PID",
 *                     EcmPid: "STRING_VALUE",
 *                     EsRateInPes: "EXCLUDE" || "INCLUDE",
 *                     EtvPlatformPid: "STRING_VALUE",
 *                     EtvSignalPid: "STRING_VALUE",
 *                     FragmentTime: Number("double"),
 *                     Klv: "NONE" || "PASSTHROUGH",
 *                     KlvDataPids: "STRING_VALUE",
 *                     NielsenId3Behavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 *                     NullPacketBitrate: Number("double"),
 *                     PatInterval: Number("int"),
 *                     PcrControl: "CONFIGURED_PCR_PERIOD" || "PCR_EVERY_PES_PACKET",
 *                     PcrPeriod: Number("int"),
 *                     PcrPid: "STRING_VALUE",
 *                     PmtInterval: Number("int"),
 *                     PmtPid: "STRING_VALUE",
 *                     ProgramNum: Number("int"),
 *                     RateMode: "CBR" || "VBR",
 *                     Scte27Pids: "STRING_VALUE",
 *                     Scte35Control: "NONE" || "PASSTHROUGH",
 *                     Scte35Pid: "STRING_VALUE",
 *                     SegmentationMarkers: "EBP" || "EBP_LEGACY" || "NONE" || "PSI_SEGSTART" || "RAI_ADAPT" || "RAI_SEGSTART",
 *                     SegmentationStyle: "MAINTAIN_CADENCE" || "RESET_CADENCE",
 *                     SegmentationTime: Number("double"),
 *                     TimedMetadataBehavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 *                     TimedMetadataPid: "STRING_VALUE",
 *                     TransportStreamId: Number("int"),
 *                     VideoPid: "STRING_VALUE",
 *                     Scte35PrerollPullupMilliseconds: Number("double"),
 *                   },
 *                   RawSettings: {},
 *                 },
 *                 Extension: "STRING_VALUE",
 *                 NameModifier: "STRING_VALUE",
 *               },
 *               FrameCaptureOutputSettings: {
 *                 NameModifier: "STRING_VALUE",
 *               },
 *               HlsOutputSettings: {
 *                 H265PackagingType: "HEV1" || "HVC1",
 *                 HlsSettings: {
 *                   AudioOnlyHlsSettings: {
 *                     AudioGroupId: "STRING_VALUE",
 *                     AudioOnlyImage: {
 *                       PasswordParam: "<InputLocation>",
 *                       Uri: "<InputLocation>",
 *                       Username: "<InputLocation>",
 *                     },
 *                     AudioTrackType: "ALTERNATE_AUDIO_AUTO_SELECT" || "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT" || "ALTERNATE_AUDIO_NOT_AUTO_SELECT" || "AUDIO_ONLY_VARIANT_STREAM",
 *                     SegmentType: "AAC" || "FMP4",
 *                   },
 *                   Fmp4HlsSettings: {
 *                     AudioRenditionSets: "STRING_VALUE",
 *                     NielsenId3Behavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 *                     TimedMetadataBehavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 *                   },
 *                   FrameCaptureHlsSettings: {},
 *                   StandardHlsSettings: {
 *                     AudioRenditionSets: "STRING_VALUE",
 *                     M3u8Settings: {
 *                       AudioFramesPerPes: Number("int"),
 *                       AudioPids: "STRING_VALUE",
 *                       EcmPid: "STRING_VALUE",
 *                       NielsenId3Behavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 *                       PatInterval: Number("int"),
 *                       PcrControl: "CONFIGURED_PCR_PERIOD" || "PCR_EVERY_PES_PACKET",
 *                       PcrPeriod: Number("int"),
 *                       PcrPid: "STRING_VALUE",
 *                       PmtInterval: Number("int"),
 *                       PmtPid: "STRING_VALUE",
 *                       ProgramNum: Number("int"),
 *                       Scte35Behavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 *                       Scte35Pid: "STRING_VALUE",
 *                       TimedMetadataBehavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 *                       TimedMetadataPid: "STRING_VALUE",
 *                       TransportStreamId: Number("int"),
 *                       VideoPid: "STRING_VALUE",
 *                     },
 *                   },
 *                 },
 *                 NameModifier: "STRING_VALUE",
 *                 SegmentModifier: "STRING_VALUE",
 *               },
 *               MediaPackageOutputSettings: {},
 *               MsSmoothOutputSettings: {
 *                 H265PackagingType: "HEV1" || "HVC1",
 *                 NameModifier: "STRING_VALUE",
 *               },
 *               MultiplexOutputSettings: {
 *                 Destination: {
 *                   DestinationRefId: "STRING_VALUE",
 *                 },
 *               },
 *               RtmpOutputSettings: {
 *                 CertificateMode: "SELF_SIGNED" || "VERIFY_AUTHENTICITY",
 *                 ConnectionRetryInterval: Number("int"),
 *                 Destination: {
 *                   DestinationRefId: "STRING_VALUE",
 *                 },
 *                 NumRetries: Number("int"),
 *               },
 *               UdpOutputSettings: {
 *                 BufferMsec: Number("int"),
 *                 ContainerSettings: {
 *                   M2tsSettings: {
 *                     AbsentInputAudioBehavior: "DROP" || "ENCODE_SILENCE",
 *                     Arib: "DISABLED" || "ENABLED",
 *                     AribCaptionsPid: "STRING_VALUE",
 *                     AribCaptionsPidControl: "AUTO" || "USE_CONFIGURED",
 *                     AudioBufferModel: "ATSC" || "DVB",
 *                     AudioFramesPerPes: Number("int"),
 *                     AudioPids: "STRING_VALUE",
 *                     AudioStreamType: "ATSC" || "DVB",
 *                     Bitrate: Number("int"),
 *                     BufferModel: "MULTIPLEX" || "NONE",
 *                     CcDescriptor: "DISABLED" || "ENABLED",
 *                     DvbNitSettings: {
 *                       NetworkId: Number("int"), // required
 *                       NetworkName: "STRING_VALUE", // required
 *                       RepInterval: Number("int"),
 *                     },
 *                     DvbSdtSettings: {
 *                       OutputSdt: "SDT_FOLLOW" || "SDT_FOLLOW_IF_PRESENT" || "SDT_MANUAL" || "SDT_NONE",
 *                       RepInterval: Number("int"),
 *                       ServiceName: "STRING_VALUE",
 *                       ServiceProviderName: "STRING_VALUE",
 *                     },
 *                     DvbSubPids: "STRING_VALUE",
 *                     DvbTdtSettings: {
 *                       RepInterval: Number("int"),
 *                     },
 *                     DvbTeletextPid: "STRING_VALUE",
 *                     Ebif: "NONE" || "PASSTHROUGH",
 *                     EbpAudioInterval: "VIDEO_AND_FIXED_INTERVALS" || "VIDEO_INTERVAL",
 *                     EbpLookaheadMs: Number("int"),
 *                     EbpPlacement: "VIDEO_AND_AUDIO_PIDS" || "VIDEO_PID",
 *                     EcmPid: "STRING_VALUE",
 *                     EsRateInPes: "EXCLUDE" || "INCLUDE",
 *                     EtvPlatformPid: "STRING_VALUE",
 *                     EtvSignalPid: "STRING_VALUE",
 *                     FragmentTime: Number("double"),
 *                     Klv: "NONE" || "PASSTHROUGH",
 *                     KlvDataPids: "STRING_VALUE",
 *                     NielsenId3Behavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 *                     NullPacketBitrate: Number("double"),
 *                     PatInterval: Number("int"),
 *                     PcrControl: "CONFIGURED_PCR_PERIOD" || "PCR_EVERY_PES_PACKET",
 *                     PcrPeriod: Number("int"),
 *                     PcrPid: "STRING_VALUE",
 *                     PmtInterval: Number("int"),
 *                     PmtPid: "STRING_VALUE",
 *                     ProgramNum: Number("int"),
 *                     RateMode: "CBR" || "VBR",
 *                     Scte27Pids: "STRING_VALUE",
 *                     Scte35Control: "NONE" || "PASSTHROUGH",
 *                     Scte35Pid: "STRING_VALUE",
 *                     SegmentationMarkers: "EBP" || "EBP_LEGACY" || "NONE" || "PSI_SEGSTART" || "RAI_ADAPT" || "RAI_SEGSTART",
 *                     SegmentationStyle: "MAINTAIN_CADENCE" || "RESET_CADENCE",
 *                     SegmentationTime: Number("double"),
 *                     TimedMetadataBehavior: "NO_PASSTHROUGH" || "PASSTHROUGH",
 *                     TimedMetadataPid: "STRING_VALUE",
 *                     TransportStreamId: Number("int"),
 *                     VideoPid: "STRING_VALUE",
 *                     Scte35PrerollPullupMilliseconds: Number("double"),
 *                   },
 *                 },
 *                 Destination: {
 *                   DestinationRefId: "STRING_VALUE",
 *                 },
 *                 FecOutputSettings: {
 *                   ColumnDepth: Number("int"),
 *                   IncludeFec: "COLUMN" || "COLUMN_AND_ROW",
 *                   RowLength: Number("int"),
 *                 },
 *               },
 *             },
 *             VideoDescriptionName: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     ],
 *     TimecodeConfig: {
 *       Source: "EMBEDDED" || "SYSTEMCLOCK" || "ZEROBASED", // required
 *       SyncThreshold: Number("int"),
 *     },
 *     VideoDescriptions: [ // required
 *       {
 *         CodecSettings: {
 *           FrameCaptureSettings: {
 *             CaptureInterval: Number("int"),
 *             CaptureIntervalUnits: "MILLISECONDS" || "SECONDS",
 *             TimecodeBurninSettings: {
 *               FontSize: "EXTRA_SMALL_10" || "LARGE_48" || "MEDIUM_32" || "SMALL_16", // required
 *               Position: "BOTTOM_CENTER" || "BOTTOM_LEFT" || "BOTTOM_RIGHT" || "MIDDLE_CENTER" || "MIDDLE_LEFT" || "MIDDLE_RIGHT" || "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT", // required
 *               Prefix: "STRING_VALUE",
 *             },
 *           },
 *           H264Settings: {
 *             AdaptiveQuantization: "AUTO" || "HIGH" || "HIGHER" || "LOW" || "MAX" || "MEDIUM" || "OFF",
 *             AfdSignaling: "AUTO" || "FIXED" || "NONE",
 *             Bitrate: Number("int"),
 *             BufFillPct: Number("int"),
 *             BufSize: Number("int"),
 *             ColorMetadata: "IGNORE" || "INSERT",
 *             ColorSpaceSettings: {
 *               ColorSpacePassthroughSettings: {},
 *               Rec601Settings: {},
 *               Rec709Settings: {},
 *             },
 *             EntropyEncoding: "CABAC" || "CAVLC",
 *             FilterSettings: {
 *               TemporalFilterSettings: {
 *                 PostFilterSharpening: "AUTO" || "DISABLED" || "ENABLED",
 *                 Strength: "AUTO" || "STRENGTH_1" || "STRENGTH_2" || "STRENGTH_3" || "STRENGTH_4" || "STRENGTH_5" || "STRENGTH_6" || "STRENGTH_7" || "STRENGTH_8" || "STRENGTH_9" || "STRENGTH_10" || "STRENGTH_11" || "STRENGTH_12" || "STRENGTH_13" || "STRENGTH_14" || "STRENGTH_15" || "STRENGTH_16",
 *               },
 *             },
 *             FixedAfd: "AFD_0000" || "AFD_0010" || "AFD_0011" || "AFD_0100" || "AFD_1000" || "AFD_1001" || "AFD_1010" || "AFD_1011" || "AFD_1101" || "AFD_1110" || "AFD_1111",
 *             FlickerAq: "DISABLED" || "ENABLED",
 *             ForceFieldPictures: "DISABLED" || "ENABLED",
 *             FramerateControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *             FramerateDenominator: Number("int"),
 *             FramerateNumerator: Number("int"),
 *             GopBReference: "DISABLED" || "ENABLED",
 *             GopClosedCadence: Number("int"),
 *             GopNumBFrames: Number("int"),
 *             GopSize: Number("double"),
 *             GopSizeUnits: "FRAMES" || "SECONDS",
 *             Level: "H264_LEVEL_1" || "H264_LEVEL_1_1" || "H264_LEVEL_1_2" || "H264_LEVEL_1_3" || "H264_LEVEL_2" || "H264_LEVEL_2_1" || "H264_LEVEL_2_2" || "H264_LEVEL_3" || "H264_LEVEL_3_1" || "H264_LEVEL_3_2" || "H264_LEVEL_4" || "H264_LEVEL_4_1" || "H264_LEVEL_4_2" || "H264_LEVEL_5" || "H264_LEVEL_5_1" || "H264_LEVEL_5_2" || "H264_LEVEL_AUTO",
 *             LookAheadRateControl: "HIGH" || "LOW" || "MEDIUM",
 *             MaxBitrate: Number("int"),
 *             MinIInterval: Number("int"),
 *             NumRefFrames: Number("int"),
 *             ParControl: "INITIALIZE_FROM_SOURCE" || "SPECIFIED",
 *             ParDenominator: Number("int"),
 *             ParNumerator: Number("int"),
 *             Profile: "BASELINE" || "HIGH" || "HIGH_10BIT" || "HIGH_422" || "HIGH_422_10BIT" || "MAIN",
 *             QualityLevel: "ENHANCED_QUALITY" || "STANDARD_QUALITY",
 *             QvbrQualityLevel: Number("int"),
 *             RateControlMode: "CBR" || "MULTIPLEX" || "QVBR" || "VBR",
 *             ScanType: "INTERLACED" || "PROGRESSIVE",
 *             SceneChangeDetect: "DISABLED" || "ENABLED",
 *             Slices: Number("int"),
 *             Softness: Number("int"),
 *             SpatialAq: "DISABLED" || "ENABLED",
 *             SubgopLength: "DYNAMIC" || "FIXED",
 *             Syntax: "DEFAULT" || "RP2027",
 *             TemporalAq: "DISABLED" || "ENABLED",
 *             TimecodeInsertion: "DISABLED" || "PIC_TIMING_SEI",
 *             TimecodeBurninSettings: {
 *               FontSize: "EXTRA_SMALL_10" || "LARGE_48" || "MEDIUM_32" || "SMALL_16", // required
 *               Position: "BOTTOM_CENTER" || "BOTTOM_LEFT" || "BOTTOM_RIGHT" || "MIDDLE_CENTER" || "MIDDLE_LEFT" || "MIDDLE_RIGHT" || "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT", // required
 *               Prefix: "STRING_VALUE",
 *             },
 *           },
 *           H265Settings: {
 *             AdaptiveQuantization: "AUTO" || "HIGH" || "HIGHER" || "LOW" || "MAX" || "MEDIUM" || "OFF",
 *             AfdSignaling: "AUTO" || "FIXED" || "NONE",
 *             AlternativeTransferFunction: "INSERT" || "OMIT",
 *             Bitrate: Number("int"),
 *             BufSize: Number("int"),
 *             ColorMetadata: "IGNORE" || "INSERT",
 *             ColorSpaceSettings: {
 *               ColorSpacePassthroughSettings: {},
 *               DolbyVision81Settings: {},
 *               Hdr10Settings: {
 *                 MaxCll: Number("int"),
 *                 MaxFall: Number("int"),
 *               },
 *               Rec601Settings: {},
 *               Rec709Settings: {},
 *             },
 *             FilterSettings: {
 *               TemporalFilterSettings: {
 *                 PostFilterSharpening: "AUTO" || "DISABLED" || "ENABLED",
 *                 Strength: "AUTO" || "STRENGTH_1" || "STRENGTH_2" || "STRENGTH_3" || "STRENGTH_4" || "STRENGTH_5" || "STRENGTH_6" || "STRENGTH_7" || "STRENGTH_8" || "STRENGTH_9" || "STRENGTH_10" || "STRENGTH_11" || "STRENGTH_12" || "STRENGTH_13" || "STRENGTH_14" || "STRENGTH_15" || "STRENGTH_16",
 *               },
 *             },
 *             FixedAfd: "AFD_0000" || "AFD_0010" || "AFD_0011" || "AFD_0100" || "AFD_1000" || "AFD_1001" || "AFD_1010" || "AFD_1011" || "AFD_1101" || "AFD_1110" || "AFD_1111",
 *             FlickerAq: "DISABLED" || "ENABLED",
 *             FramerateDenominator: Number("int"), // required
 *             FramerateNumerator: Number("int"), // required
 *             GopClosedCadence: Number("int"),
 *             GopSize: Number("double"),
 *             GopSizeUnits: "FRAMES" || "SECONDS",
 *             Level: "H265_LEVEL_1" || "H265_LEVEL_2" || "H265_LEVEL_2_1" || "H265_LEVEL_3" || "H265_LEVEL_3_1" || "H265_LEVEL_4" || "H265_LEVEL_4_1" || "H265_LEVEL_5" || "H265_LEVEL_5_1" || "H265_LEVEL_5_2" || "H265_LEVEL_6" || "H265_LEVEL_6_1" || "H265_LEVEL_6_2" || "H265_LEVEL_AUTO",
 *             LookAheadRateControl: "HIGH" || "LOW" || "MEDIUM",
 *             MaxBitrate: Number("int"),
 *             MinIInterval: Number("int"),
 *             ParDenominator: Number("int"),
 *             ParNumerator: Number("int"),
 *             Profile: "MAIN" || "MAIN_10BIT",
 *             QvbrQualityLevel: Number("int"),
 *             RateControlMode: "CBR" || "MULTIPLEX" || "QVBR",
 *             ScanType: "INTERLACED" || "PROGRESSIVE",
 *             SceneChangeDetect: "DISABLED" || "ENABLED",
 *             Slices: Number("int"),
 *             Tier: "HIGH" || "MAIN",
 *             TimecodeInsertion: "DISABLED" || "PIC_TIMING_SEI",
 *             TimecodeBurninSettings: {
 *               FontSize: "EXTRA_SMALL_10" || "LARGE_48" || "MEDIUM_32" || "SMALL_16", // required
 *               Position: "BOTTOM_CENTER" || "BOTTOM_LEFT" || "BOTTOM_RIGHT" || "MIDDLE_CENTER" || "MIDDLE_LEFT" || "MIDDLE_RIGHT" || "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT", // required
 *               Prefix: "STRING_VALUE",
 *             },
 *           },
 *           Mpeg2Settings: {
 *             AdaptiveQuantization: "AUTO" || "HIGH" || "LOW" || "MEDIUM" || "OFF",
 *             AfdSignaling: "AUTO" || "FIXED" || "NONE",
 *             ColorMetadata: "IGNORE" || "INSERT",
 *             ColorSpace: "AUTO" || "PASSTHROUGH",
 *             DisplayAspectRatio: "DISPLAYRATIO16X9" || "DISPLAYRATIO4X3",
 *             FilterSettings: {
 *               TemporalFilterSettings: {
 *                 PostFilterSharpening: "AUTO" || "DISABLED" || "ENABLED",
 *                 Strength: "AUTO" || "STRENGTH_1" || "STRENGTH_2" || "STRENGTH_3" || "STRENGTH_4" || "STRENGTH_5" || "STRENGTH_6" || "STRENGTH_7" || "STRENGTH_8" || "STRENGTH_9" || "STRENGTH_10" || "STRENGTH_11" || "STRENGTH_12" || "STRENGTH_13" || "STRENGTH_14" || "STRENGTH_15" || "STRENGTH_16",
 *               },
 *             },
 *             FixedAfd: "AFD_0000" || "AFD_0010" || "AFD_0011" || "AFD_0100" || "AFD_1000" || "AFD_1001" || "AFD_1010" || "AFD_1011" || "AFD_1101" || "AFD_1110" || "AFD_1111",
 *             FramerateDenominator: Number("int"), // required
 *             FramerateNumerator: Number("int"), // required
 *             GopClosedCadence: Number("int"),
 *             GopNumBFrames: Number("int"),
 *             GopSize: Number("double"),
 *             GopSizeUnits: "FRAMES" || "SECONDS",
 *             ScanType: "INTERLACED" || "PROGRESSIVE",
 *             SubgopLength: "DYNAMIC" || "FIXED",
 *             TimecodeInsertion: "DISABLED" || "GOP_TIMECODE",
 *             TimecodeBurninSettings: {
 *               FontSize: "EXTRA_SMALL_10" || "LARGE_48" || "MEDIUM_32" || "SMALL_16", // required
 *               Position: "BOTTOM_CENTER" || "BOTTOM_LEFT" || "BOTTOM_RIGHT" || "MIDDLE_CENTER" || "MIDDLE_LEFT" || "MIDDLE_RIGHT" || "TOP_CENTER" || "TOP_LEFT" || "TOP_RIGHT", // required
 *               Prefix: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         Height: Number("int"),
 *         Name: "STRING_VALUE", // required
 *         RespondToAfd: "NONE" || "PASSTHROUGH" || "RESPOND",
 *         ScalingBehavior: "DEFAULT" || "STRETCH_TO_OUTPUT",
 *         Sharpness: Number("int"),
 *         Width: Number("int"),
 *       },
 *     ],
 *   },
 *   InputAttachments: [
 *     {
 *       AutomaticInputFailoverSettings: {
 *         ErrorClearTimeMsec: Number("int"),
 *         FailoverConditions: [
 *           {
 *             FailoverConditionSettings: {
 *               AudioSilenceSettings: {
 *                 AudioSelectorName: "STRING_VALUE", // required
 *                 AudioSilenceThresholdMsec: Number("int"),
 *               },
 *               InputLossSettings: {
 *                 InputLossThresholdMsec: Number("int"),
 *               },
 *               VideoBlackSettings: {
 *                 BlackDetectThreshold: Number("double"),
 *                 VideoBlackThresholdMsec: Number("int"),
 *               },
 *             },
 *           },
 *         ],
 *         InputPreference: "EQUAL_INPUT_PREFERENCE" || "PRIMARY_INPUT_PREFERRED",
 *         SecondaryInputId: "STRING_VALUE", // required
 *       },
 *       InputAttachmentName: "STRING_VALUE",
 *       InputId: "STRING_VALUE",
 *       InputSettings: {
 *         AudioSelectors: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             SelectorSettings: {
 *               AudioHlsRenditionSelection: {
 *                 GroupId: "STRING_VALUE", // required
 *                 Name: "STRING_VALUE", // required
 *               },
 *               AudioLanguageSelection: {
 *                 LanguageCode: "STRING_VALUE", // required
 *                 LanguageSelectionPolicy: "LOOSE" || "STRICT",
 *               },
 *               AudioPidSelection: {
 *                 Pid: Number("int"), // required
 *               },
 *               AudioTrackSelection: {
 *                 Tracks: [ // required
 *                   {
 *                     Track: Number("int"), // required
 *                   },
 *                 ],
 *                 DolbyEDecode: {
 *                   ProgramSelection: "ALL_CHANNELS" || "PROGRAM_1" || "PROGRAM_2" || "PROGRAM_3" || "PROGRAM_4" || "PROGRAM_5" || "PROGRAM_6" || "PROGRAM_7" || "PROGRAM_8", // required
 *                 },
 *               },
 *             },
 *           },
 *         ],
 *         CaptionSelectors: [
 *           {
 *             LanguageCode: "STRING_VALUE",
 *             Name: "STRING_VALUE", // required
 *             SelectorSettings: {
 *               AncillarySourceSettings: {
 *                 SourceAncillaryChannelNumber: Number("int"),
 *               },
 *               AribSourceSettings: {},
 *               DvbSubSourceSettings: {
 *                 OcrLanguage: "DEU" || "ENG" || "FRA" || "NLD" || "POR" || "SPA",
 *                 Pid: Number("int"),
 *               },
 *               EmbeddedSourceSettings: {
 *                 Convert608To708: "DISABLED" || "UPCONVERT",
 *                 Scte20Detection: "AUTO" || "OFF",
 *                 Source608ChannelNumber: Number("int"),
 *                 Source608TrackNumber: Number("int"),
 *               },
 *               Scte20SourceSettings: {
 *                 Convert608To708: "DISABLED" || "UPCONVERT",
 *                 Source608ChannelNumber: Number("int"),
 *               },
 *               Scte27SourceSettings: {
 *                 OcrLanguage: "DEU" || "ENG" || "FRA" || "NLD" || "POR" || "SPA",
 *                 Pid: Number("int"),
 *               },
 *               TeletextSourceSettings: {
 *                 OutputRectangle: {
 *                   Height: Number("double"), // required
 *                   LeftOffset: Number("double"), // required
 *                   TopOffset: Number("double"), // required
 *                   Width: Number("double"), // required
 *                 },
 *                 PageNumber: "STRING_VALUE",
 *               },
 *             },
 *           },
 *         ],
 *         DeblockFilter: "DISABLED" || "ENABLED",
 *         DenoiseFilter: "DISABLED" || "ENABLED",
 *         FilterStrength: Number("int"),
 *         InputFilter: "AUTO" || "DISABLED" || "FORCED",
 *         NetworkInputSettings: {
 *           HlsInputSettings: {
 *             Bandwidth: Number("int"),
 *             BufferSegments: Number("int"),
 *             Retries: Number("int"),
 *             RetryInterval: Number("int"),
 *             Scte35Source: "MANIFEST" || "SEGMENTS",
 *           },
 *           ServerValidation: "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME" || "CHECK_CRYPTOGRAPHY_ONLY",
 *         },
 *         Scte35Pid: Number("int"),
 *         Smpte2038DataPreference: "IGNORE" || "PREFER",
 *         SourceEndBehavior: "CONTINUE" || "LOOP",
 *         VideoSelector: {
 *           ColorSpace: "FOLLOW" || "HDR10" || "HLG_2020" || "REC_601" || "REC_709",
 *           ColorSpaceSettings: {
 *             Hdr10Settings: {
 *               MaxCll: Number("int"),
 *               MaxFall: Number("int"),
 *             },
 *           },
 *           ColorSpaceUsage: "FALLBACK" || "FORCE",
 *           SelectorSettings: {
 *             VideoSelectorPid: {
 *               Pid: Number("int"),
 *             },
 *             VideoSelectorProgramId: {
 *               ProgramId: Number("int"),
 *             },
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   InputSpecification: {
 *     Codec: "MPEG2" || "AVC" || "HEVC",
 *     MaximumBitrate: "MAX_10_MBPS" || "MAX_20_MBPS" || "MAX_50_MBPS",
 *     Resolution: "SD" || "HD" || "UHD",
 *   },
 *   LogLevel: "ERROR" || "WARNING" || "INFO" || "DEBUG" || "DISABLED",
 *   Maintenance: {
 *     MaintenanceDay: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 *     MaintenanceStartTime: "STRING_VALUE",
 *   },
 *   Name: "STRING_VALUE",
 *   RequestId: "STRING_VALUE",
 *   Reserved: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Vpc: {
 *     PublicAddressAllocationIds: [
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     SubnetIds: [ // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateChannelCommandInput - {@link CreateChannelCommandInput}
 * @returns {@link CreateChannelCommandOutput}
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 *
 */
export class CreateChannelCommand extends $Command<
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: CreateChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChannelCommandInput, CreateChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateChannelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "CreateChannelCommand";
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
  private serialize(input: CreateChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChannelCommandOutput> {
    return deserializeAws_restJson1CreateChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
