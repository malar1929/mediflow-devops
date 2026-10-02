import sys
from pathlib import Path

import yaml

base = Path(r'C:\Users\SELVA MALAR\OneDrive\Documents\mediflow-devops')
files = [
    base / 'docker-compose.yml',
    base / 'kubernetes' / 'deployment.yaml',
    base / 'kubernetes' / 'service.yaml',
    base / 'kubernetes' / 'ingress.yaml',
    base / 'kubernetes' / 'configmap.yaml',
    base / 'kubernetes' / 'secret.yaml',
    base / 'monitoring' / 'prometheus.yml',
]

for path in files:
    try:
        with path.open('r', encoding='utf-8') as handle:
            list(yaml.safe_load_all(handle))
        print(f'YAML OK: {path.name}')
    except Exception as exc:
        print(f'YAML FAIL: {path.name}: {exc}')
        sys.exit(1)

print('All YAML manifests parsed successfully.')
