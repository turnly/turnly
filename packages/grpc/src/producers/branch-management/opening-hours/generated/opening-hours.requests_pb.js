// source: opening-hours.requests.proto
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

goog.exportSymbol('proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject', null, global);
goog.exportSymbol('proto.turnly.branch_management.v1.opening_hours.BulkRequest', null, global);
goog.exportSymbol('proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest', null, global);
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
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.displayName = 'proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest';
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
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.displayName = 'proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject';
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
proto.turnly.branch_management.v1.opening_hours.BulkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.turnly.branch_management.v1.opening_hours.BulkRequest.repeatedFields_, null);
};
goog.inherits(proto.turnly.branch_management.v1.opening_hours.BulkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.turnly.branch_management.v1.opening_hours.BulkRequest.displayName = 'proto.turnly.branch_management.v1.opening_hours.BulkRequest';
}



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
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest;
  return proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
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
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest} returns this
 */
proto.turnly.branch_management.v1.opening_hours.ListLocationHoursRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dayOfWeek: jspb.Message.getFieldWithDefault(msg, 3, 0),
    closedAllDay: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    openAllDay: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    openHour: jspb.Message.getFieldWithDefault(msg, 6, 0),
    openMinutes: jspb.Message.getFieldWithDefault(msg, 7, 0),
    closeHour: jspb.Message.getFieldWithDefault(msg, 8, 0),
    closeMinutes: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject;
  return proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDayOfWeek(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClosedAllDay(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOpenAllDay(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpenHour(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpenMinutes(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCloseHour(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCloseMinutes(value);
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
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDayOfWeek();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getClosedAllDay();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getOpenAllDay();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getOpenHour();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getOpenMinutes();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCloseHour();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getCloseMinutes();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 day_of_week = 3;
 * @return {number}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.getDayOfWeek = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.setDayOfWeek = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool closed_all_day = 4;
 * @return {boolean}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.getClosedAllDay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.setClosedAllDay = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool open_all_day = 5;
 * @return {boolean}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.getOpenAllDay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.setOpenAllDay = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int32 open_hour = 6;
 * @return {number}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.getOpenHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.setOpenHour = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 open_minutes = 7;
 * @return {number}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.getOpenMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.setOpenMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 close_hour = 8;
 * @return {number}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.getCloseHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.setCloseHour = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 close_minutes = 9;
 * @return {number}
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.getCloseMinutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.prototype.setCloseMinutes = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.turnly.branch_management.v1.opening_hours.BulkRequest.repeatedFields_ = [2];



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
proto.turnly.branch_management.v1.opening_hours.BulkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.turnly.branch_management.v1.opening_hours.BulkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.turnly.branch_management.v1.opening_hours.BulkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.BulkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    openingHoursList: jspb.Message.toObjectList(msg.getOpeningHoursList(),
    proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.toObject, includeInstance)
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
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkRequest}
 */
proto.turnly.branch_management.v1.opening_hours.BulkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.turnly.branch_management.v1.opening_hours.BulkRequest;
  return proto.turnly.branch_management.v1.opening_hours.BulkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.turnly.branch_management.v1.opening_hours.BulkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkRequest}
 */
proto.turnly.branch_management.v1.opening_hours.BulkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 2:
      var value = new proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject;
      reader.readMessage(value,proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.deserializeBinaryFromReader);
      msg.addOpeningHours(value);
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
proto.turnly.branch_management.v1.opening_hours.BulkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.turnly.branch_management.v1.opening_hours.BulkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.turnly.branch_management.v1.opening_hours.BulkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.turnly.branch_management.v1.opening_hours.BulkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpeningHoursList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject.serializeBinaryToWriter
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.turnly.branch_management.v1.opening_hours.BulkRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkRequest} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated BulkOpeningHoursObject opening_hours = 2;
 * @return {!Array<!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject>}
 */
proto.turnly.branch_management.v1.opening_hours.BulkRequest.prototype.getOpeningHoursList = function() {
  return /** @type{!Array<!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject, 2));
};


/**
 * @param {!Array<!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject>} value
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkRequest} returns this
*/
proto.turnly.branch_management.v1.opening_hours.BulkRequest.prototype.setOpeningHoursList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject}
 */
proto.turnly.branch_management.v1.opening_hours.BulkRequest.prototype.addOpeningHours = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.turnly.branch_management.v1.opening_hours.BulkOpeningHoursObject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.turnly.branch_management.v1.opening_hours.BulkRequest} returns this
 */
proto.turnly.branch_management.v1.opening_hours.BulkRequest.prototype.clearOpeningHoursList = function() {
  return this.setOpeningHoursList([]);
};


goog.object.extend(exports, proto.turnly.branch_management.v1.opening_hours);
