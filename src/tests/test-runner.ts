
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
      console.log('   ❌ For Self button naming issue:', selfFlowBtn?.textContent);
    }
    
    if (familyFlowBtn?.textContent?.includes('For Family')) {
      console.log('   ✅ For Family button correctly named');
    } else {
      console.log('   ❌ For Family button naming issue:', familyFlowBtn?.textContent);
    }
    
    // Test step indicators on quote form page
    console.log('\n2. Testing step indicators...');
    const flowIndicator = document.querySelector('[data-testid="flow-indicator"]');
    const stepIndicator = document.querySelector('[data-testid="step-indicator"]');
    
    if (flowIndicator) {
      console.log('   ✅ Flow indicator present:', flowIndicator.textContent);
    } else {
      console.log('   ❌ Flow indicator missing');
    }
    
    if (stepIndicator) {
      console.log('   ✅ Step indicator present:', stepIndicator.textContent);
    } else {
      console.log('   ❌ Step indicator missing');
    }
    
    // Test continue button functionality
    console.log('\n3. Testing continue button...');
    const nextBtn = document.querySelector('[data-testid="next-btn"]');
    if (nextBtn?.textContent?.includes('Continue')) {
      console.log('   ✅ Continue button present with correct text');
    } else if (nextBtn?.textContent?.includes('Generate Quote')) {
      console.log('   ✅ Generate Quote button present (final step)');
    } else {
      console.log('   ❌ Continue/Generate Quote button issue:', nextBtn?.textContent);
    }
    
    // Test family members step visibility
    console.log('\n4. Testing family members step...');
    const familyMembersStep = document.querySelector('[data-testid="family-members-step"]');
    const addMemberBtn = document.querySelector('[data-testid="add-family-member-btn"]');
    
    if (window.location.search.includes('flow=detailed')) {
      console.log('   📋 In Family flow - Family Members step should be accessible in step 4');
      if (familyMembersStep) {
        console.log('   ✅ Family members step visible');
      } else {
        console.log('   ⚠️  Family members step not currently visible (check step navigation)');
      }
    } else {
      console.log('   📋 In Self flow - Family Members step should be skipped');
    }
    
    console.log('\n✅ Manual health flow tests completed!');
    console.log('\n📋 Manual Testing Instructions:');
    console.log('1. Go to home page and select health insurance');
    console.log('2. Click "For Self" and verify 3-step flow');
    console.log('3. Go back and click "For Family" and verify 5-step flow');
    console.log('4. In Family flow, navigate to step 3, select "Family" plan type, then continue to step 4');
    console.log('5. Verify Family Members step appears and you can add family members');
    
  } catch (error) {
    console.error('❌ Test execution failed:', error);
  }
};

// Auto-execute if in development mode
if (typeof window !== 'undefined') {
  // Add to window for manual execution in browser console
  (window as any).executeHealthFlowTests = executeHealthFlowTests;
  console.log('🧪 Health Flow Tests available! Run executeHealthFlowTests() in console.');
}
