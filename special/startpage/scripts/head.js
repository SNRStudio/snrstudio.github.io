if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.write("        <link href=\"..\/styles\/Light-Style\/light-attribute.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/Light-Style\/light-element.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/Light-Style\/light-block.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/Light-Style\/light-text.css\" rel=\"stylesheet\">");
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.write("        <link href=\"..\/styles\/Dark-Style\/dark-attribute.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/Dark-Style\/dark-element.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/Dark-Style\/dark-block.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/Dark-Style\/dark-text.css\" rel=\"stylesheet\">");
} else {
    document.write("        <link href=\"..\/styles\/Light-Style\/light-attribute.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/Light-Style\/light-element.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/Light-Style\/light-block.css\" rel=\"stylesheet\">");
    document.write("        <link href=\"..\/styles\/Light-Style\/light-text.css\" rel=\"stylesheet\">");
}
document.write("        <link rel=\"shortcut icon\" href=\"..\/images\/wicon.png\">");
document.write("        <link href=\"..\/styles\/space.css\" rel=\"stylesheet\">");