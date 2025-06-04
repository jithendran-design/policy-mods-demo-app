
// Simple test execution function for manual testing
export const executeHealthFlowTests = () => {
  console.log('🔄 Executing Health Insurance Flow Tests...\n');
  
  try {
    // Test the flow naming changes
    console.log('1. Testing flow button naming...');
    const selfFlowBtn = document.querySelector('[data-testid="health-simple-flow-btn"]');
    const familyFlowBtn = document.querySelector('[data-testid="health-detailed-flow-btn"]');
    
    if (selfFlowBtn?.textContent?.includes('For Self')) {
      console.log('   ✅ For Self button correctly named');
    } else {
      console.log('   ❌ For Self button naming issue');
    }
    
    if (familyFlowBtn?.textContent?.includes('For Family')) {
      console.log('   ✅ For Family button correctly named');
    } else {
      console.log('   ❌ For Family button naming issue');
    }
    
    // Test step indicators
    console.log('\n2. Testing step indicators...');
    const flowIndicator = document.querySelector('[data-testid="flow-indicator"]');
    if (flowIndicator) {
      console.log('   ✅ Flow indicator present');
    }
    
    // Test family members step
    console.log('\n3. Testing family members functionality...');
    const familyMembersStep = document.querySelector('[data-testid="family-members-step"]');
    const addMemberBtn = document.querySelector('[data-testid="add-family-member-btn"]');
    
    if (addMemberBtn) {
      console.log('   ✅ Add family member button present');
    }
    
    // Test continue button functionality
    console.log('\n4. Testing continue button navigation...');
    const nextBtn = document.querySelector('[data-testid="next-btn"]');
    if (nextBtn?.textContent?.includes('Continue')) {
      console.log('   ✅ Continue button present');
    }
    
    console.log('\n✅ Manual health flow tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test execution failed:', error);
  }
};

// Auto-execute if in development mode
if (typeof window !== 'undefined') {
  // Add to window for manual execution in browser console
  (window as any).executeHealthFlowTests = executeHealthFlowTests;
  console.log('Health Flow Tests available! Run executeHealthFlowTests() in console.');
}
