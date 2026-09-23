from PIL import Image
from pathlib import Path
p=Path('public/images')
s=Path('design/source-assets')
for name, width in [('forest-hero',1920),('forest-discovery',1200),('waldlinge-logo',256),('botanical',400)]:
    im=Image.open(s/f'{name}.png')
    im.thumbnail((width,4000))
    im.save(p/f'{name}.webp',quality=86,method=6)
    print(name,im.size,(p/f'{name}.webp').stat().st_size)
im=Image.open(s/'forest-hero.png')
w,h=im.size
im=im.crop((int(w*.40),0,w,h))
im.thumbnail((850,1200))
im.save(p/'forest-hero-mobile.webp',quality=85,method=6)

