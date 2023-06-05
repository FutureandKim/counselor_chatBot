from django.db import models

# Create your models here.

class User(models.Model):
    user_name = models.CharField(max_length=16, unique=True, verbose_name="이름")
    user_birth = models.DateField(verbose_name="생년월일")

    def __str__(self):
        return self.user_name

    class Meta:
        db_table = 'name'
        verbose_name = '이름'
        verbose_name_plural = '이름'  # 복수형 고려(이름s 되지 않게)