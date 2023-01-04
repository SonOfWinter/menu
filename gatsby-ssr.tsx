const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes }: any) => {
    setHtmlAttributes({ lang: "fr" })
}
