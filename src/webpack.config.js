module.exports = {
    mode: "development",
    resolve: {
        fallback : { "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3"),
        "string_decoder": require.resolve("string_decoder/"),
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "events": require.resolve("events/"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert/"),
        "buffer": require.resolve("buffer/"),
        "util": require.resolve("util/"),
        "http": require.resolve("stream-http"),
        "url": require.resolve("url/"),
        }
    },
    externals:{
        fs:    "commonjs fs",
        path:  "commonjs path",
        dns:  "commonjs dns",
        net:  "commonjs net",
        tls:  "commonjs tls",
        "pg-native":  "commonjs pg-native"
    }    
};
