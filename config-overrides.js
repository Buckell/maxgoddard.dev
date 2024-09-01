const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const GenerateFileWebpackPlugin = require("generate-file-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const packageData = JSON.parse(fs.readFileSync(path.resolve(__dirname, "package.json")).toString());

function template(file) {
    return handlebars.compile(fs.readFileSync(path.resolve(__dirname, file)).toString());
}

module.exports = {
    webpack: (config) => {
        config.plugins.push(new FaviconsWebpackPlugin({
            logo: "logo.svg",
            inject: true,
            favicons: {
                appName: packageData.info.name,
                appShortName: packageData.info.shortName,
                appDescription: packageData.info.description,
                developerName: packageData.info.author,
                developerURL: packageData.info.authorUrl,
                background: packageData.info.backgroundColor,
                theme_color: packageData.info.color
            }
        }));

        config.plugins.push(new InterpolateHtmlPlugin({
            "TITLE": packageData.info.title,
            "NAME": packageData.info.name,
            "SHORT_NAME": packageData.info.shortName,
            "DESCRIPTION": packageData.info.description,
            "APP_URL": packageData.info.appUrl,
            "AUTHOR": packageData.info.author,
            "AUTHOR_URL": packageData.info.authorUrl,
            "BACKGROUND_COLOR": packageData.info.backgroundColor,
            "COLOR": packageData.info.color
        }));

        config.plugins.push(new GenerateFileWebpackPlugin({
            file: "manifest.json",
            content: () => template("templates/manifest.hbs")({
                info: packageData.info
            })
        }))

        config.plugins.push(new GenerateFileWebpackPlugin({
            file: "robots.txt",
            content: () => template("templates/robots.hbs")({

            })
        }))

        return config;
    }
}