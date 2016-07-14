// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function test(x, y) { return x * y; }

assertEquals(8, test(2, 4));
assertEquals(-0, test(-3, 0));
assertEquals(-0, test(0, -0));

const SMI_MAX = (1 << 29) - 1 + (1 << 29);  // Create without overflowing.
const SMI_MIN = -SMI_MAX - 1;  // Create without overflowing.

// multiply by 3 to avoid compiler optimizations that convert 2*x to x + x.
assertEquals(SMI_MAX + SMI_MAX + SMI_MAX, test(SMI_MAX, 3));
