import {
  registerFieldPlugins,
  registerRenderPlugins,
  registerActionPlugins,
  registerFilterPlugins,
} from "sula";


export default function applyPlugins() {
  registerFieldPlugins();
  registerRenderPlugins();
  registerActionPlugins();
  registerFilterPlugins();
}