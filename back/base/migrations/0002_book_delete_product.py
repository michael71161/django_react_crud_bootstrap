# Generated by Django 4.0.6 on 2022-07-10 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('desc', models.CharField(blank=True, max_length=50, null=True)),
                ('author', models.CharField(blank=True, max_length=50, null=True)),
                ('year', models.DecimalField(decimal_places=2, max_digits=8)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.DeleteModel(
            name='Product',
        ),
    ]
