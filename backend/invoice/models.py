from django.db import models

# Create your models here.
class Invoice (models.Model):
 customer_name = models.CharField(max_length = 100 , unique = True)
 date          = models.DateTimeField(auto_now_add=True,auto_now=False)
 address       = models.CharField(max_length = 100)
 total_invoice = models.IntegerField()
 def __str__ (self):
    return self.customer_name
class InvoiceDetail(models.Model):
 item_name = models.CharField(max_length=100)
 price     = models.IntegerField()
 quantity  = models.IntegerField()
 total     = models.IntegerField()
 customer_id  = models.ForeignKey(Invoice,on_delete=models.CASCADE,related_name='invoice_details')
 def __str__ (self):
    return self.item_name
    class Meta:
        ordering = ('date')