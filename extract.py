from PIL import Image
import os

img = Image.open('animated.webp')
os.makedirs('frames', exist_ok=True)

frame = 0
while True:
    try:
        img.seek(frame)
        if frame % 5 == 0:  # extract every 5th frame
            img.save(f'frames/frame_{frame:03d}.png')
        frame += 1
    except EOFError:
        break
