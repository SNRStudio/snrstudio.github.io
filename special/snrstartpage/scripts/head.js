document.write("        <link rel=\"shortcut icon\" href=\"..\/images\/wicon.png\">");
document.write("        <link href=\"..\/..\/..\/styles\/attribute.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/styles\/element.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/styles\/block.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/..\/..\/styles\/element.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/..\/..\/styles\/block.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/..\/..\/styles\/text.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/..\/..\/styles\/space.css\" rel=\"stylesheet\">");
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.write("        <link href=\"..\/..\/..\/styles\/-dark.css\" rel=\"stylesheet\">");
} else {
    document.write("        <link href=\"..\/..\/..\/styles\/-light.css\" rel=\"stylesheet\">");
}