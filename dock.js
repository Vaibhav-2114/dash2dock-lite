    _beginAnimation(caller) {
      // Not in chrome yet (constructor, dash child-added): measuring the Dash
      // off-stage logs St-CRITICAL get_theme_node on GNOME 51+. dock() calls
      // this again after addToChrome().
      if (!this.get_stage()) {
        return;
      }

      if (this.extension.debug_visual) {
        this.add_style_class_name('hi');
        this.struts?.add_style_class_name('hi');
        this.dwell?.add_style_class_name('hi');
      }
