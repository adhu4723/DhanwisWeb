# Generated by Django 5.0.6 on 2025-05-14 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_alter_career_job'),
    ]

    operations = [
        migrations.AlterField(
            model_name='career',
            name='job',
            field=models.CharField(choices=[('Python Developer', 'Python Developer'), ('Mern Stack', 'Mern Stack'), ('Digital Marketing', 'Digital Marketing'), ('Graphic Design', 'Graphic Design')], default='pythondeveloper', max_length=200),
        ),
    ]
