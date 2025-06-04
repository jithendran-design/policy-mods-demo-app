
// Manual testing utilities for Health Insurance Flow
// This file provides manual testing functions that can be executed in the browser console

// Manual execution test function for debugging
export const runHealthFlowTests = () => {
  console.log('🔄 Starting Health Insurance Flow Tests...');
  
  try {
    // Test 1: Verify flow naming
    console.log('1. Testing flow button naming...');
    const selfFlowBtn = document.querySelector('[data-testid="health-simple-flow-btn"]');
    const familyFlowBtn = document.querySelector('[data-testid="health-detailed-flow-btn"]');
    
    if (selfFlowBtn?.textContent?.includes('Self')) {
      console.log('   ✅ Self button correctly named');
    } else {
      console.log('   ❌ Self button naming issue:', selfFlowBtn?.textContent);
    }
    
    if (familyFlowBtn?.textContent?.includes('Family')) {
      console.log('   ✅ Family button correctly named');
    } else {
      console.log('   ❌ Family button naming issue:', familyFlowBtn?.textContent);
    }
    
    // Test 2: Check flow indicator
    console.log('\n2. Testing flow indicators...');
    const flowIndicator = document.querySelector('[data-testid="flow-indicator"]');
    if (flowIndicator) {
      console.log('   ✅ Flow indicator present:', flowIndicator.textContent);
    } else {
      console.log('   ❌ Flow indicator missing');
    }
    
    // Test 3: Check step progression
    console.log('\n3. Testing step indicators...');
    const stepIndicator = document.querySelector('[data-testid="step-indicator"]');
    if (stepIndicator) {
      console.log('   ✅ Step indicator present:', stepIndicator.textContent);
    } else {
      console.log('   ❌ Step indicator missing');
    }
    
    // Test 4: Check family members functionality
    console.log('\n4. Testing family members step visibility...');
    const familyMembersStep = document.querySelector('[data-testid="family-members-step"]');
    const addMemberBtn = document.querySelector('[data-testid="add-family-member-btn"]');
    
    if (familyMembersStep) {
      console.log('   ✅ Family members step is visible');
    } else {
      console.log('   ℹ️ Family members step not currently visible (depends on flow and step)');
    }
    
    if (addMemberBtn) {
      console.log('   ✅ Add family member button present');
    }
    
    console.log('\n✅ Manual health flow tests completed!');
    
  } catch (error) {
    console.error('❌ Test execution failed:', error);
  }
};

// Test step navigation specifically
export const testStepNavigation = () => {
  console.log('🔄 Testing Step Navigation...');
  
  const nextBtn = document.querySelector('[data-testid="next-btn"]');
  const prevBtn = document.querySelector('[data-testid="previous-btn"]');
  const stepIndicator = document.querySelector('[data-testid="step-indicator"]');
  
  console.log('Current step:', stepIndicator?.textContent);
  console.log('Next button available:', !!nextBtn);
  console.log('Previous button available:', !!prevBtn);
  
  // Check if we're in family flow
  const flowIndicator = document.querySelector('[data-testid="flow-indicator"]');
  const isDetailedFlow = flowIndicator?.textContent?.includes('Family');
  console.log('Is Family flow:', isDetailedFlow);
  
  return {
    currentStep: stepIndicator?.textContent,
    nextAvailable: !!nextBtn,
    prevAvailable: !!prevBtn,
    isDetailedFlow
  };
};

// Test family plan selection
export const testFamilyPlanSelection = () => {
  console.log('🔄 Testing Family Plan Selection...');
  
  const planTypeSelect = document.querySelector('[data-testid="plan-type-select"]');
  if (planTypeSelect) {
    console.log('   ✅ Plan type select found');
    // You can manually click this to test
    console.log('   💡 Click the plan type select and choose "Family" to test family members step');
  } else {
    console.log('   ❌ Plan type select not found');
  }
};
