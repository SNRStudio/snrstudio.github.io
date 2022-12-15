document.write("        <link rel=\"shortcut icon\" href=\"..\/images\/wicon.png\">");
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.write("        <link href=\"..\/styles\/dark\/attribute.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/dark\/element.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/dark\/block.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/dark\/text.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/dark\/space.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/dark\/navbar.css\" rel=\"stylesheet\">");
} else {
    document.write("        <link href=\"..\/styles\/light\/attribute.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/light\/element.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/light\/block.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/light\/text.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/light\/space.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/light\/navbar.css\" rel=\"stylesheet\">");
}