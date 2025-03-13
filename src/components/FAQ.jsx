import React from 'react'
import { Plus, Minus } from "lucide-react";

function FAQ() {
    return (
        <div class="accordion accordion-shadow">
            <div class="accordion-item active" id="payment-shadow">
                <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="payment-shadow-collapse" aria-expanded="true">
                    <span class="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
                    <span class="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
                    When is payment taken for my order?
                </button>
                <div id="payment-shadow-collapse" class="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-shadow" role="region">
                    <div class="px-5 pb-4">
                        <p class="text-base-content/80 font-normal">
                            Payment is taken during the checkout process when you pay for your order. The order number that appears on the
                            confirmation screen indicates payment has been successfully processed.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item" id="delivery-shadow">
                <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="delivery-shadow-collapse" aria-expanded="false">
                    <span class="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
                    <span class="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
                    How would you ship my order?
                </button>
                <div id="delivery-shadow-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-shadow" role="region">
                    <div class="px-5 pb-4">
                        <p class="text-base-content/80 font-normal">
                            For large products, we deliver your product via a third party logistics company offering you the “room of
                            choice” scheduled delivery service. For small products, we offer free parcel delivery.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item" id="cancel-shadow">
                <button class="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="cancel-shadow-collapse" aria-expanded="false">
                    <span class="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
                    <span class="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
                    Can I cancel my order?
                </button>
                <div id="cancel-shadow-collapse" class="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel-shadow" role="region">
                    <div class="px-5 pb-4">
                        <p class="text-base-content/80 font-normal">
                            Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ