import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ContactController extends GetxController {
  final RxBool isLoading = false.obs;
  final RxBool isFormSubmitted = false.obs;
  
  final nameController = TextEditingController();
  final emailController = TextEditingController();
  final messageController = TextEditingController();

  void submitForm() {
    if (nameController.text.isEmpty || 
        emailController.text.isEmpty || 
        messageController.text.isEmpty) {
      Get.snackbar(
        'Error',
        'Please fill in all fields',
        snackPosition: SnackPosition.BOTTOM,
      );
      return;
    }
    
    isLoading.value = true;
    
    // Simulate form submission
    Future.delayed(const Duration(seconds: 2), () {
      isLoading.value = false;
      isFormSubmitted.value = true;
      
      // Clear form
      nameController.clear();
      emailController.clear();
      messageController.clear();
      
      Get.snackbar(
        'Success',
        'Message sent successfully!',
        snackPosition: SnackPosition.BOTTOM,
      );
    });
  }

  @override
  void onClose() {
    nameController.dispose();
    emailController.dispose();
    messageController.dispose();
    super.onClose();
  }
}
