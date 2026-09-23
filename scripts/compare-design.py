from PIL import Image, ImageOps, ImageDraw
from pathlib import Path
p=Path('design/qa')
a=Image.open('design/waldlinge-verfeinert-desktop.png').convert('RGB')
b=Image.open(p/'desktop-final.png').convert('RGB')
print('source',a.size,'implementation',b.size)
a=ImageOps.contain(a,(720,900))
b=ImageOps.contain(b,(720,900))
out=Image.new('RGB',(1440,945),'#eeeeee')
out.paste(a,(0,40));out.paste(b,(720,40))
d=ImageDraw.Draw(out);d.text((20,15),'Freigegebener Entwurf',fill='black');d.text((740,15),'Browser - umgesetzte Website',fill='black')
out.save(p/'comparison-desktop.jpg',quality=92)
# Focused equal-width hero comparison, preserving each region aspect ratio.
a=Image.open('design/waldlinge-verfeinert-desktop.png').convert('RGB').crop((0,0,1122,590))
b=Image.open(p/'desktop-final.png').convert('RGB').crop((0,0,1440,730))
a=ImageOps.contain(a,(900,490));b=ImageOps.contain(b,(900,490))
out=Image.new('RGB',(1800,520),'#eeeeee');out.paste(a,(0,25));out.paste(b,(900,25));out.save(p/'comparison-hero.jpg',quality=94)
