/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_1_1404328_r extends java.lang.Object implements com.tns.NativeScriptHashCodeProvider, android.support.v7.widget.SearchView.OnQueryTextListener {
	public Object_vendor_1_1404328_r(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public boolean onQueryTextChange(java.lang.String param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onQueryTextChange", boolean.class, args);
	}

	public boolean onQueryTextSubmit(java.lang.String param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onQueryTextSubmit", boolean.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
