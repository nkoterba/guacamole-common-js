var test = require('tape');
const fs = require('fs');

var Guacamole = require('..');

test('commonjs test', function (t) {
	t.ok(Guacamole != null, 'Guacamole should be defined');

	t.ok(Guacamole.ArrayBufferReader != null, 'Guacamole should define module: ArrayBufferReader');
	t.ok(Guacamole.ArrayBufferWriter != null, 'Guacamole should define module: ArrayBufferWriter');
	t.ok(Guacamole.AudioContextFactory != null, 'Guacamole should define module: AudioContextFactory');
	t.ok(Guacamole.AudioPlayer != null, 'Guacamole should define module: AudioPlayer');
	t.ok(Guacamole.AudioRecorder != null, 'Guacamole should define module: AudioRecorder');
	t.ok(Guacamole.BlobReader != null, 'Guacamole should define module: BlobReader');
	t.ok(Guacamole.BlobWriter != null, 'Guacamole should define module: BlobWriter');
	t.ok(Guacamole.Client != null, 'Guacamole should define module: Client');
	t.ok(Guacamole.DataURIReader != null, 'Guacamole should define module: DataURIReader');
	t.ok(Guacamole.Display != null, 'Guacamole should define module: Display');
	t.ok(Guacamole.InputStream != null, 'Guacamole should define module: InputStream');
	t.ok(Guacamole.IntegerPool != null, 'Guacamole should define module: IntegerPool');
	t.ok(Guacamole.JSONReader != null, 'Guacamole should define module: JSONReader');
	t.ok(Guacamole.Keyboard != null, 'Guacamole should define module: Keyboard');
	t.ok(Guacamole.Layer != null, 'Guacamole should define module: Layer');
	t.ok(Guacamole.Mouse != null, 'Guacamole should define module: Mouse');
	t.ok(Guacamole.Object != null, 'Guacamole should define module: Object');
	t.ok(Guacamole.OnScreenKeyboard != null, 'Guacamole should define module: OnScreenKeyboard');
	t.ok(Guacamole.OutputStream != null, 'Guacamole should define module: OutputStream');
	t.ok(Guacamole.Parser != null, 'Guacamole should define module: Parser');
	t.ok(Guacamole.RawAudioFormat != null, 'Guacamole should define module: RawAudioFormat');
	t.ok(Guacamole.Status != null, 'Guacamole should define module: Status');
	t.ok(Guacamole.StringReader != null, 'Guacamole should define module: StringReader');
	t.ok(Guacamole.StringWriter != null, 'Guacamole should define module: StringWriter');
	t.ok(Guacamole.Tunnel != null, 'Guacamole should define module: Tunnel');
	t.ok(Guacamole.VideoPlayer != null, 'Guacamole should define module: VideoPlayer');

	t.end();
});