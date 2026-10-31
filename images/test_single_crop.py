import os
from PIL import Image, ImageDraw, ImageOps

# 1. ضع هنا اسم الصورة التجريبية بدقة (مع امتدادها مثل .png أو .png)
IMAGE_FILENAME = "rubus_sanctus_st1.png" 

# 2. جرب تغيير هذه القيمة واختبار النتيجة حتى تصل لشكل الاستدارة المطلوب
CORNER_RADIUS = 50 

def process_single_image():
    if not os.path.exists(IMAGE_FILENAME):
        print(f"❌ خطأ: الصورة '{IMAGE_FILENAME}' غير موجودة في هذا المجلد. يرجى التأكد من الاسم.")
        return

    try:
        with Image.open(IMAGE_FILENAME) as img:
            img = img.convert("RGBA")
            print(f"📐 أبعاد الصورة الأصلية: العرض = {img.width}px، الارتفاع = {img.height}px")

            # إنشاء قناع بحواف دائرية (Rounded Rectangle Mask)
            mask = Image.new('L', img.size, 0)
            draw = ImageDraw.Draw(mask)
            draw.rounded_rectangle([(0, 0), img.size], radius=CORNER_RADIUS, fill=255)
            
            # تطبيق القناع والقص
            result = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
            result.putalpha(mask)
            
            # حفظ الصورة الناتجة للمعاينة
            output_name = "preview_rounded.png"
            result.save(output_name, "PNG")
            print(f"✨ تم معالجة الصورة بنجاح! تم حفظها باسم: '{output_name}' في نفس المجلد.")
            print(f"🔍 قيمة الاستدارة الحالية (Radius): {CORNER_RADIUS}px. افتح الصورة لتقييم النتيجة.")
            
    except Exception as e:
        print(f"❌ حدث خطأ أثناء معالجة الصورة: {e}")

if __name__ == "__main__":
    process_single_image()