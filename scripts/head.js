document.write("        <link rel=\"shortcut icon\" href=\"..\/images\/wicon.png\">");
document.write("        <link href=\"..\/styles\/-all.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/styles\/attribute.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/styles\/element.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/styles\/block.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/styles\/text.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/styles\/space.css\" rel=\"stylesheet\">");
document.write("        <link href=\"..\/styles\/navbar.css\" rel=\"stylesheet\">");
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.write("        <link href=\"..\/styles\/-dark.css\" rel=\"stylesheet\">");
} else {
    document.write("        <link href=\"..\/styles\/-light.css\" rel=\"stylesheet\">");
}
var pgnme = getComputedStyle(document.documentElement).getPropertyValue('--pagename');
var wbnmestr = "SNR Studio";
var pgtitle = pgnme.concat(" - ",wbnmestr);
document.title = pgtitle;