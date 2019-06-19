from .models import Invoice,InvoiceDetail
from rest_framework import serializers

class Invoice_detail_serializer(serializers.ModelSerializer):
    class Meta :
        model = InvoiceDetail
        fields = ('__all__')
class  InvoiceSerializer(serializers.ModelSerializer):
    invoice_details = Invoice_detail_serializer(many=True,read_only=True)
    class Meta : 
        model  = Invoice
        fields = ('__all__')
