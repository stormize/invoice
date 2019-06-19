from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
from .models import Invoice,InvoiceDetail
from django.shortcuts import get_object_or_404
from django.views import generic
from .serializers import InvoiceSerializer, Invoice_detail_serializer
from django.shortcuts import get_object_or_404

class invoice(APIView):
    def post(self , req):
     print(req.data.get('invoice_details'))
     serializer = InvoiceSerializer(data=req.data)
     detailsserializer = Invoice_detail_serializer(data = req.data.get('invoice_details'))
     if serializer.is_valid() and detailsserializer.is_valid():
         serializer.save()
         detailsserializer.save()
         return Response(serializer.data+detailsserializer, status=status.HTTP_201_CREATED)
     return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    def get(self,req):
        invoice = Invoice.objects.all()
        serializer =InvoiceSerializer(invoice, many=True)
        return Response(serializer.data)
class DeleteUpdate(APIView):
      def get(self,req,id):
        invoice = get_object_or_404(Invoice,id=id)
        serializer = InvoiceSerializer(invoice)
        return Response(serializer.data)

      def delete(self, req, id,):
       invoice = Invoice.objects.get(id=id)
       invoice.delete()
       return Response(status=status.HTTP_204_NO_CONTENT)
      def put(self, req, id, format=None):
        invoice = Invoice.objects.get(id=id)
        invoice.customer_name=req.data.get('customer_name')
        invoice.address=req.data.get('address')
        invoice.total_invoice = req.data.get('total_invoice')
        invoice.save()
        return Response(status = status.HTTP_200_OK)        
class Details(APIView):
   def post(self,req):
        serializer = Invoice_detail_serializer(data=req.data)
        if serializer.is_valid():
         serializer.save()
         return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
   def get(self,req):
        invoice = InvoiceDetail.objects.all()
        serializer =Invoice_detail_serializer(invoice, many=True)
        return Response(serializer.data)
class DetailsDeleteUpdate(APIView):
    def get(self,req,id):
        invoice = get_object_or_404(InvoiceDetail,id=id)
        serializer = Invoice_detail_serializer(invoice)
        return Response(serializer.data)
    def put(self,req,id):
        invoice = InvoiceDetail.objects.get(id=id)
        invoice.item_name = req.data.get('item_name')
        invoice.price = req.data.get('price')
        invoice.quantity = req.data.get('quantity')
        invoice.total = req.data.get('total')
        invoice.save()
        return Response(status = status.HTTP_200_OK)
    def delete(self,req,id):
       invoice = InvoiceDetail.objects.get(id=id)
       invoice.delete()
       return Response(status=status.HTTP_204_NO_CONTENT)
      


        