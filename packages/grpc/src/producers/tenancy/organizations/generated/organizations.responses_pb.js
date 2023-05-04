// source: organizations.responses.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse', null, global);
goog.exportSymbol('proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse', null, global);
goog.exportSymbol('proto.turnly.tenancy.v1.organizations.Organization', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.turnly.tenancy.v1.organizations.Organization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.turnly.tenancy.v1.organizations.Organization.repeatedFields_, null);
};
goog.inherits(proto.turnly.tenancy.v1.organizations.Organization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.tenancy.v1.organizations.Organization.displayName = 'proto.turnly.tenancy.v1.organizations.Organization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.repeatedFields_, null);
};
goog.inherits(proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.displayName = 'proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.displayName = 'proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.turnly.tenancy.v1.organizations.Organization.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.tenancy.v1.organizations.Organization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.tenancy.v1.organizations.Organization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.tenancy.v1.organizations.Organization.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subdomain: jspb.Message.getFieldWithDefault(msg, 4, ""),
    metadataList: jspb.Message.toObjectList(msg.getMetadataList(),
    common_pb.Extra.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.turnly.tenancy.v1.organizations.Organization}
 */
proto.turnly.tenancy.v1.organizations.Organization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.tenancy.v1.organizations.Organization;
  return proto.turnly.tenancy.v1.organizations.Organization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.tenancy.v1.organizations.Organization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.tenancy.v1.organizations.Organization}
 */
proto.turnly.tenancy.v1.organizations.Organization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubdomain(value);
      break;
    case 5:
      var value = new common_pb.Extra;
      reader.readMessage(value,common_pb.Extra.deserializeBinaryFromReader);
      msg.addMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.tenancy.v1.organizations.Organization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.tenancy.v1.organizations.Organization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.tenancy.v1.organizations.Organization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubdomain();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      common_pb.Extra.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.tenancy.v1.organizations.Organization} returns this
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.tenancy.v1.organizations.Organization} returns this
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.tenancy.v1.organizations.Organization} returns this
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subdomain = 4;
 * @return {string}
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.getSubdomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.tenancy.v1.organizations.Organization} returns this
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.setSubdomain = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated turnly.common.v1.Extra metadata = 5;
 * @return {!Array<!proto.turnly.common.v1.Extra>}
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.getMetadataList = function() {
  return /** @type{!Array<!proto.turnly.common.v1.Extra>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Extra, 5));
};


/**
 * @param {!Array<!proto.turnly.common.v1.Extra>} value
 * @return {!proto.turnly.tenancy.v1.organizations.Organization} returns this
*/
proto.turnly.tenancy.v1.organizations.Organization.prototype.setMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.turnly.common.v1.Extra=} opt_value
 * @param {number=} opt_index
 * @return {!proto.turnly.common.v1.Extra}
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.addMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.turnly.common.v1.Extra, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.turnly.tenancy.v1.organizations.Organization} returns this
 */
proto.turnly.tenancy.v1.organizations.Organization.prototype.clearMetadataList = function() {
  return this.setMetadataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.turnly.tenancy.v1.organizations.Organization.toObject, includeInstance),
    meta: (f = msg.getMeta()) && common_pb.Meta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse}
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse;
  return proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse}
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.turnly.tenancy.v1.organizations.Organization;
      reader.readMessage(value,proto.turnly.tenancy.v1.organizations.Organization.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 2:
      var value = new common_pb.Meta;
      reader.readMessage(value,common_pb.Meta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.turnly.tenancy.v1.organizations.Organization.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Meta.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Organization data = 1;
 * @return {!Array<!proto.turnly.tenancy.v1.organizations.Organization>}
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.turnly.tenancy.v1.organizations.Organization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.turnly.tenancy.v1.organizations.Organization, 1));
};


/**
 * @param {!Array<!proto.turnly.tenancy.v1.organizations.Organization>} value
 * @return {!proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse} returns this
*/
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.turnly.tenancy.v1.organizations.Organization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.turnly.tenancy.v1.organizations.Organization}
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.turnly.tenancy.v1.organizations.Organization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse} returns this
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * optional turnly.common.v1.Meta meta = 2;
 * @return {?proto.turnly.common.v1.Meta}
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.prototype.getMeta = function() {
  return /** @type{?proto.turnly.common.v1.Meta} */ (
    jspb.Message.getWrapperField(this, common_pb.Meta, 2));
};


/**
 * @param {?proto.turnly.common.v1.Meta|undefined} value
 * @return {!proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse} returns this
*/
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse} returns this
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.turnly.tenancy.v1.organizations.ListMyOrganizationsResponse.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.turnly.tenancy.v1.organizations.Organization.toObject(includeInstance, f),
    meta: (f = msg.getMeta()) && common_pb.Meta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse}
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse;
  return proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse}
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.turnly.tenancy.v1.organizations.Organization;
      reader.readMessage(value,proto.turnly.tenancy.v1.organizations.Organization.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new common_pb.Meta;
      reader.readMessage(value,common_pb.Meta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.turnly.tenancy.v1.organizations.Organization.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Meta.serializeBinaryToWriter
    );
  }
};


/**
 * optional Organization data = 1;
 * @return {?proto.turnly.tenancy.v1.organizations.Organization}
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.prototype.getData = function() {
  return /** @type{?proto.turnly.tenancy.v1.organizations.Organization} */ (
    jspb.Message.getWrapperField(this, proto.turnly.tenancy.v1.organizations.Organization, 1));
};


/**
 * @param {?proto.turnly.tenancy.v1.organizations.Organization|undefined} value
 * @return {!proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse} returns this
*/
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse} returns this
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional turnly.common.v1.Meta meta = 2;
 * @return {?proto.turnly.common.v1.Meta}
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.prototype.getMeta = function() {
  return /** @type{?proto.turnly.common.v1.Meta} */ (
    jspb.Message.getWrapperField(this, common_pb.Meta, 2));
};


/**
 * @param {?proto.turnly.common.v1.Meta|undefined} value
 * @return {!proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse} returns this
*/
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse} returns this
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.turnly.tenancy.v1.organizations.GetOrganizationBySubdomainResponse.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.turnly.tenancy.v1.organizations);
