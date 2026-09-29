from pathlib import Path
from PIL import Image
root = Path('public/images')
for source, target, width in [
    ('Kind-auf-Baumwurzel-web.jpg', 'waldlinge-baumwurzel.webp', 1400),
    ('Kinder-mit-Werkzeug-web.jpg', 'waldlinge-werkeln.webp', 800),
    ('Bollerwagen-im-Wald-web.jpg', 'waldlinge-bollerwagen.webp', 1200),
    ('partners-original.jpg', 'wildnisschule-logo.webp', 700),
    ('artgerecht-original.png', 'artgerecht-logo.webp', 800),
]:
    im = Image.open(Path('design/source-assets') / source)
    im.thumbnail((width, 1600))
    im.save(root / target, quality=86, method=6)
    print(target, im.size)

