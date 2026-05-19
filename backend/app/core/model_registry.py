#app/core/model_registry.py
import importlib

modules = [
    "app.models.user",
]

for module in modules:
    importlib.import_module(module)