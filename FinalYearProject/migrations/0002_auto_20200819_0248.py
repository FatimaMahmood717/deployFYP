# Generated by Django 3.1 on 2020-08-19 09:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('FinalYearProject', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimages',
            name='product_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='FinalYearProject.products'),
        ),
        migrations.AlterField(
            model_name='products',
            name='name',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
