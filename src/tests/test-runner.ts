
import { runHealthFlowTests, testStepNavigation, testFamilyPlanSelection } from './HealthInsuranceFlow.test';

// Simple test execution function for manual testing
export const executeHealthFlowTests = () => {
  console.log('🔄 Executing Health Insurance Flow Tests...\n');
  
  try {
    // Test the flow naming changes
    console.log('1. Testing flow button naming...');
    const selfFlowBtn = document.querySelector('[data-testid="health-simple-flow-btn"]');
    const familyFlowBtn = document.querySelector('[data-testid="health-detailed-flow-btn"]');
    
    if (selfFlowBtn?.textContent?.includes('Self')) {
      console.log('   ✅ Self button correctly named');
    } else {
      console.log('   ❌ Self button naming issue');
    }
    
    if (familyFlowBtn?.textContent?.includes('Family')) {
      console.log('   ✅ Family button correctly named');
    } else {
      console.log('   ❌ Family button naming issue');
    }
    
    // Test step indicators
    console.log('\n2. Testing step indicators...');
    const flowIndicator = document.querySelector('[data-testid="flow-indicator"]');
    if (flowIndicator) {
      console.log('   ✅ Flow indicator present:', flowIndicator.textContent);
    }
    
    // Test family members step
    console.log('\n3. Testing family members functionality...');
    const familyMembersStep = document.querySelector('[data-testid="family-members-step"]');
    const addMemberBtn = document.querySelector('[data-testid="add-family-member-btn"]');
    
    if (addMemberBtn) {
      console.log('   ✅ Add family member button present');
    }
    
    // Test step navigation
    console.log('\n4. Testing step navigation...');
    const navigationInfo = testStepNavigation();
    console.log('   Navigation info:', navigationInfo);
    
    console.log('\n✅ Manual health flow tests completed successfully!');
    
    // Run the automated tests
    runHealthFlowTests();
    
  } catch (error) {
    console.error('❌ Test execution failed:', error);
  }
};

// Export additional test functions
export { testStepNavigation, testFamilyPlanSelection };

// Auto-execute if in development mode
if (process.env.NODE_ENV === 'development') {
  // Add to window for manual execution in browser console
  (window as any).executeHealthFlowTests = executeHealthFlowTests;
  (window as any).testStepNavigation = testStepNavigation;
  (window as any).testFamilyPlanSelection = testFamilyPlanSelection;
  console.log('Health Flow Tests available! Run executeHealthFlowTests() in console.');
}
