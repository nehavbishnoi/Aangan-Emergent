"""One-off script to generate the hero family image via Gemini Nano Banana."""
import asyncio
import base64
import os
import sys
from pathlib import Path

from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[1]
load_dotenv(ROOT / 'backend' / '.env')

from emergentintegrations.llm.chat import LlmChat, UserMessage  # noqa: E402

OUT = ROOT / 'frontend' / 'public' / 'generated'
OUT.mkdir(parents=True, exist_ok=True)


async def gen(name: str, prompt: str):
    key = os.environ['EMERGENT_LLM_KEY']
    chat = LlmChat(api_key=key, session_id=f'gen-{name}', system_message='You generate warm, candid, editorial family photographs.')
    chat.with_model('gemini', 'gemini-3.1-flash-image-preview').with_params(modalities=['image', 'text'])
    msg = UserMessage(text=prompt)
    print(f'[{name}] generating...', flush=True)
    text, images = await chat.send_message_multimodal_response(msg)
    if not images:
        print(f'[{name}] NO IMAGE returned. text={text[:200]}', flush=True)
        return
    img = images[0]
    data = base64.b64decode(img['data'])
    path = OUT / f'{name}.jpg'
    path.write_bytes(data)
    print(f'[{name}] saved -> {path} ({len(data)} bytes)', flush=True)


async def main():
    targets = [
        (
            'hero-family',
            'Editorial, candid documentary photograph of a multigenerational family of four — '
            'a mother, a father, and two young sons (around 6 and 9 years old) — sitting close '
            'together on a warm wooden floor or low couch in a softly-lit modern home with '
            'natural daylight from a window. Warm ivory and soft sand tones, a hint of muted '
            'terracotta in textiles. Faces are gentle, neutral, racially ambiguous (could be '
            'South Asian, Mediterranean, Latin American, or mixed-heritage — never specifically '
            'identifiable to one region). Mother is reading from a small handwritten notebook; '
            'the youngest son is listening, leaning on her shoulder. The father holds a cup of '
            'tea. The elder son sketches on paper on the floor. The mood is intimate, soft, and '
            'unposed — like a frame from a luxury family memoir magazine. Shot on 50mm, shallow '
            'depth of field, soft golden afternoon light, paper-grain texture, '
            'no logos, no Indian temple imagery, no religious symbols, no festival decoration, '
            'no saffron-heavy colour. Cinematic, warm, premium editorial.',
        ),
    ]
    for name, prompt in targets:
        try:
            await gen(name, prompt)
        except Exception as e:  # noqa: BLE001
            print(f'[{name}] FAILED: {e}', flush=True)


if __name__ == '__main__':
    asyncio.run(main())
